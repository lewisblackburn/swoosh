import { GraphQLError } from 'graphql';
import { MiddlewareFn } from 'type-graphql';

export const ErrorInterceptor: MiddlewareFn<any> = async ({ context, info }, next) => {
	const { confirmed } = context.req.session;

	if (!confirmed) {
		throw new GraphQLError('You need to verify your account!');
	}

	return next();
};
