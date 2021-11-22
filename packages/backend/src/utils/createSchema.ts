import {buildSchema} from 'type-graphql';
import {HelloResolver} from '../modules/Hello';
import {authChecker} from '../modules/middleware/authChecker';

export const createSchema = async () =>
	buildSchema({
		resolvers: [HelloResolver],
		authChecker,
	});
