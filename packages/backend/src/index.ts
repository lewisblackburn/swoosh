import { ApolloServer } from 'apollo-server-express';
import connectRedis from 'connect-redis';
import cors from 'cors';
import 'dotenv-safe/config';
import express from 'express';
import session from 'express-session';
import { fieldExtensionsEstimator, getComplexity, simpleEstimator } from 'graphql-query-complexity';
import { graphqlUploadExpress } from 'graphql-upload';
import path from 'path';
import 'reflect-metadata';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';
import { createServer } from 'http';
import { COOKIE_NAME, __prod__ } from './constants';
import { prisma } from './db';
import { Context } from './interfaces/context';
import { redis } from './redis';
import { createSchema } from './utils/createSchema';

const PORT = parseInt(process.env.PORT ?? '4000');

const driver = async () => {
	const app = express();
	const httpServer = createServer(app);

	app.get('/', (req, res) => {
		res.redirect('/graphql');
	});

	const RedisStore = connectRedis(session);
	app.set('trust proxy', 1);
	app.use(
		cors({
			origin: process.env.CORS_ORIGIN,
			credentials: true,
		})
	);

	app.use(
		session({
			name: COOKIE_NAME,
			store: new RedisStore({
				client: redis,
				disableTouch: true,
			}),
			cookie: {
				maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
				httpOnly: true,
				sameSite: 'lax', // Csrf
				secure: __prod__, // Cookie only works in https
				domain: __prod__ ? '.zxffo.cc' : undefined,
			},
			saveUninitialized: false,
			secret: process.env.SESSION_SECRET ?? '',
			resave: false,
		})
	);

	app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 1 }));
	app.use('/images', express.static(path.join(__dirname, '../images')));

	const schema = await createSchema();
	const apolloServer = new ApolloServer({
		schema,
		context: ({ req, res }): Context => ({ prisma, req, res, redis }),
		uploads: false,
		introspection: !__prod__,
		playground: !__prod__,
		plugins: [
			{
				requestDidStart: () => ({
					didResolveOperation({ request, document }) {
						const complexity = getComplexity({
							schema,
							query: document,
							variables: request.variables,
							estimators: [fieldExtensionsEstimator(), simpleEstimator({ defaultComplexity: 1 })],
						});
						const limit = 30;
						if (complexity > limit) {
							throw new Error(
								`Sorry, too complicated query! ${complexity} is over ${limit} that is the max allowed complexity.`
							);
						}
					},
				}),
			},
		],
	});

	apolloServer.applyMiddleware({
		app,
		cors: __prod__,
	});

	// codesandbox.io/s/github/apollographql/docs-examples/tree/main/apollo-server/v3/subscriptions?fontsize=14&hidenavigation=1&initialpath=/graphql&theme=dark&file=/index.js:489-529
	SubscriptionServer.create(
		{ schema, execute, subscribe },
		{ server: httpServer, path: apolloServer.graphqlPath }
	);

	httpServer.listen(PORT, () => {
		console.log(`Query endpoint ready at http://localhost:${PORT}${apolloServer.graphqlPath}`);
		console.log(`Subscription endpoint ready at ws://localhost:${PORT}${apolloServer.graphqlPath}`);
	});
};

driver().catch(console.error);
