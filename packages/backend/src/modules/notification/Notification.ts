import {
	transformFields,
	transformCountFieldIntoSelectRelationsCount,
	getPrismaFromContext,
} from '../../generated/type-graphql/helpers';
import {Args, Authorized, Ctx, Info, Query, Resolver, Root, Subscription, UseMiddleware} from 'type-graphql';
import {FindManyNotificationArgs, Notification, User} from '../../generated/type-graphql';
import {Context} from '../../interfaces/context';
import graphqlFields from 'graphql-fields';
import {GraphQLResolveInfo} from 'graphql';
import {ErrorInterceptor} from '../middleware/ErrorInterceptor';

@Resolver(Notification)
export class NotificationResolver {
	@Authorized(['ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Query(() => [Notification], {
		nullable: false,
	})
	async notifications(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: FindManyNotificationArgs
	): Promise<Notification[]> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.notification.findMany({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Subscription({
		topics: 'NOTIFICATIONS',
		// this needs to somehow only accepts when the userId is the userId in the context
		// payload.userId === context.req.session.userId
		// filter: ({payload}) => payload.senderId === payload.userId;,
	})
	notificationListener(@Root() root: Notification): Notification {
		return root;
	}
}
