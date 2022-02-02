import {PubSubEngine} from 'apollo-server-express';
import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {Arg, Args, Authorized, Ctx, Info, Int, Mutation, PubSub, Query, Resolver, UseMiddleware} from 'type-graphql';
import {FindManyFollowsArgs, Follows} from '../../generated/type-graphql';
import {transformCountFieldIntoSelectRelationsCount, transformFields} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';
import {ErrorInterceptor} from '../middleware/ErrorInterceptor';

@Resolver(Follows)
export class FollowsResolver {
	@Authorized(['USER', 'ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Boolean)
	async follow(
		@PubSub() pubSub: PubSubEngine,
		@Arg('userId', () => Int) userId: number,
		@Ctx() ctx: Context
	): Promise<boolean> {
		if (userId === ctx.req.session.userId) throw new Error("You can't follow yourself");
		if (!ctx.req.session.userId) return false;

		const follow = await ctx.prisma.follows.create({
			data: {
				following: {
					connect: {
						id: ctx.req.session.userId,
					},
				},
				follower: {
					connect: {
						id: userId,
					},
				},
			},
		});

		await ctx.prisma.user
			.findUnique({
				where: {
					id: follow.followingId,
				},
			})
			.then(async user => {
				await ctx.prisma.notification
					.create({
						data: {
							// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
							message: `${user?.username} is following you`,
							user: {
								connect: {
									id: userId,
								},
							},
						},
					})
					.then(async notification => {
						await pubSub.publish('NOTIFICATIONS', {
							...notification,
						});
					});
			});

		return Boolean(follow);
	}

	@Authorized(['USER', 'ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Boolean)
	async unfollow(@Arg('userId', () => Int) userId: number, @Ctx() ctx: Context): Promise<boolean> {
		if (userId === ctx.req.session.userId) throw new Error("You can't unfollow yourself");
		if (!ctx.req.session.userId) return false;

		const follow = await ctx.prisma.follows.delete({
			where: {
				followerId_followingId: {
					followingId: ctx.req.session.userId,
					followerId: userId,
				},
			},
		});

		return Boolean(follow);
	}

	@Authorized(['USER', 'ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Query(() => [Follows], {
		nullable: false,
	})
	async follows(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: FindManyFollowsArgs
	): Promise<Follows[]> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.follows.findMany({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}
}
