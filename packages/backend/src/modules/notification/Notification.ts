import { GraphQLResolveInfo } from 'graphql';
import graphqlFields from 'graphql-fields';
import {
	Arg,
	Args,
	Authorized,
	Ctx,
	Info,
	Int,
	Query,
	Resolver,
	Root,
	Subscription,
	UseMiddleware,
} from 'type-graphql';
import { FindManyNotificationArgs, Notification } from '../../generated/type-graphql';
import { transformCountFieldIntoSelectRelationsCount, transformFields } from '../../generated/type-graphql/helpers';
import { Context } from '../../interfaces/context';
import { ErrorInterceptor } from '../middleware/ErrorInterceptor';

@Resolver(Notification)
export class NotificationResolver {
	@Authorized(['USER', 'ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Query(() => [Notification], {
		nullable: false,
	})
	async notifications(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: FindManyNotificationArgs
	): Promise<Notification[]> {
		const { _count } = transformFields(graphqlFields(info as any));
		return ctx.prisma.notification.findMany({
			...args,
			where: {
				read: false,
				userId: ctx.req.session.userId,
			},
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Subscription({
		topics: 'NOTIFICATIONS',
		filter: ({ payload, args }) => payload.userId === args.listenerId, // Only listen to notifications coming to you
	})
	notificationListener(@Root() root: Notification, @Arg('listenerId', () => Int) listenerId: number): Notification {
		console.log(listenerId);
		return root;
	}
}
