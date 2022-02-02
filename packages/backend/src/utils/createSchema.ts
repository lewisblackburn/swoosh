import {buildSchema} from 'type-graphql';
import {authChecker} from '../modules/middleware/authChecker';

export const createSchema = async () => {
	return buildSchema({
		resolvers: [
			// eslint-disable-next-line no-warning-comments
			// TODO: I don't know why this isn't working but it's importing the generated type-graphql resolvers as well
			__dirname + '/../modules/**/*.ts',
			__dirname + '../generated/type-graphql/resolvers/relations/**/*.ts',
		],
		authChecker,
	});
};
