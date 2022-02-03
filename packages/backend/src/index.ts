import {ApolloServer} from 'apollo-server-express';
import connectRedis from 'connect-redis';
import cors from 'cors';
import 'dotenv-safe/config';
import express from 'express';
import session from 'express-session';
import {fieldExtensionsEstimator, getComplexity, simpleEstimator} from 'graphql-query-complexity';
import {graphqlUploadExpress} from 'graphql-upload';
import path from 'path';
import 'reflect-metadata';
import {SubscriptionServer} from 'subscriptions-transport-ws';
import {execute, subscribe} from 'graphql';
import {createServer} from 'http';
import {COOKIE_NAME, __prod__} from './constants';
import {prisma} from './db';
import {Context} from './interfaces/context';
import {redis} from './redis';
import {createSchema} from './utils/createSchema';
import rateLimit from 'express-rate-limit';
import RateLimitRedisStore from 'rate-limit-redis';

const PORT = parseInt(process.env.PORT ?? '4000', 10);

// Create a new express server
async function driver() {
	const app = express();
	const httpServer = createServer(app);

	// Redirect / to /graphql for convenience
	app.get('/', (req, res) => {
		res.redirect('/graphql');
	});

	// Redis session store
	const RedisStore = connectRedis(session);
	app.set('trust proxy', 1);

	app.use(
		cors({
			origin: process.env.CORS_ORIGIN,
			credentials: true,
		})
	);

	// Rate Limit
	const limiter = rateLimit({
		windowMs: 15 * 60 * 1000, // 15 minutes
		max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
		standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
		legacyHeaders: false, // Disable the `X-RateLimit-*` headers
		store: new RateLimitRedisStore({
			// Use with ioredis
			// @ts-expect-error - Known issue: the `call` function is not present in @types/ioredis
			// eslint-disable-next-line @typescript-eslint/no-unsafe-return
			sendCommand: (...args: string[]) => redis.call(...args),
		}),
	});

	app.use(limiter);

	// Cookies
	app.use(
		session({
			name: COOKIE_NAME,
			store: new RedisStore({
				client: redis,
				disableTouch: true,
			}),
			cookie: {
				maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
				httpOnly: true,
				sameSite: 'lax',
				secure: __prod__,
				domain: __prod__ ? '.zxffo.cc' : undefined,
			},
			saveUninitialized: false,
			secret: process.env.SESSION_SECRET ?? '',
			resave: false,
		})
	);

	// File Upload
	app.use(graphqlUploadExpress({maxFileSize: 10000000, maxFiles: 1}));
	app.use('/images', express.static(path.join(__dirname, '../images')));

	// GraphQL Server
	const schema = await createSchema();
	const apolloServer = new ApolloServer({
		schema,
		context: ({req, res}): Context => ({prisma, req, res, redis}),
		uploads: false,
		introspection: !__prod__,
		playground: !__prod__,
		plugins: [
			{
				// Query Complexity
				requestDidStart: () => ({
					didResolveOperation({request, document}) {
						const complexity = getComplexity({
							schema,
							query: document,
							variables: request.variables,
							estimators: [fieldExtensionsEstimator(), simpleEstimator({defaultComplexity: 1})],
						});
						const limit = 50;
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

	// Subscriptions
	apolloServer.applyMiddleware({
		app,
		cors: __prod__,
	});

	// codesandbox.io/s/github/apollographql/docs-examples/tree/main/apollo-server/v3/subscriptions?fontsize=14&hidenavigation=1&initialpath=/graphql&theme=dark&file=/index.js:489-529
	SubscriptionServer.create({schema, execute, subscribe}, {server: httpServer, path: apolloServer.graphqlPath});

	// Start Server
	httpServer.listen(PORT, () => {
		console.log(`Query endpoint ready at http://localhost:${PORT}${apolloServer.graphqlPath}`);
		console.log(`Subscription endpoint ready at ws://localhost:${PORT}${apolloServer.graphqlPath}`);
	});
}

driver().catch(console.error);
