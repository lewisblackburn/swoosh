import {Notification, User} from '../../generated/type-graphql';
import {Context} from 'backend/src/interfaces/context';
import {Arg, Authorized, Ctx, Int, Mutation, PubSub, Resolver, UseMiddleware} from 'type-graphql';
import {ErrorInterceptor} from '../middleware/ErrorInterceptor';
import {PubSubEngine} from 'apollo-server-express';

@Resolver(User)
export class FollowResolver {
	@Authorized(['USER', 'ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Boolean)
	async follow(
		@PubSub() pubSub: PubSubEngine,
		@Arg('userId', () => Int) userId: number,
		@Ctx() ctx: Context
	): Promise<boolean> {
		if (userId === ctx.req.session.userId) throw new Error("You can't follow yourself");

		const follow = await ctx.prisma.user.update({
			where: {
				id: ctx.req.session.userId,
			},
			data: {
				following: {
					connect: {id: userId},
				},
			},
		});

		const notification = await ctx.prisma.notification
			.create({
				data: {
					message: `${follow.username} is following you`,
					user: {
						connect: {
							id: userId,
						},
					},
				},
			})
			.then(async notification => {
				await pubSub.publish('NOTIFICATIONS', {...notification});
			});

		return !!follow;
	}

	@Authorized(['USER', 'ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Boolean)
	async unfollow(@Arg('userId', () => Int) userId: number, @Ctx() ctx: Context): Promise<boolean> {
		if (userId === ctx.req.session.userId) throw new Error("You can't unfollow yourself");

		const follow = await ctx.prisma.user.update({
			where: {
				id: ctx.req.session.userId,
			},
			data: {
				following: {
					disconnect: {id: userId},
				},
			},
		});
		return !!follow;
	}
}
