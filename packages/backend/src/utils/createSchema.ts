import {buildSchema} from 'type-graphql';
import {authChecker} from '../modules/middleware/authChecker';

export const createSchema = async () => {
	return buildSchema({
		resolvers: [
			// This can be updated to ** later
			__dirname + '/../modules/**/*.ts',
			__dirname + '../generated/type-graphql/resolvers/relations/**/*.ts',
		],
		authChecker,
	});
};
