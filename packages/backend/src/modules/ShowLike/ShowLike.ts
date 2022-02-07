import {ShowLike, FindManyShowLikeArgs} from '../../generated/type-graphql';
import {transformFields, transformCountFieldIntoSelectRelationsCount} from '../../generated/type-graphql/helpers';
import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {Resolver, Authorized, UseMiddleware, Query, Ctx, Info, Args, Mutation, Arg, Int} from 'type-graphql';
import {Context} from 'vm';
import {ErrorInterceptor} from '../middleware/ErrorInterceptor';
import {CreateShowLikeCustomArgs} from './args/CreateShowLikeCustomArgs';

@Resolver(ShowLike)
export class ShowLikeResolver {
	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Query(() => [ShowLike], {
		nullable: false,
	})
	async likedShows(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: FindManyShowLikeArgs
	): Promise<ShowLike[]> {
		const {_count} = transformFields(graphqlFields(info as any));
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return ctx.prisma.showLike.findMany({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Boolean, {
		nullable: false,
	})
	async likeShow(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: CreateShowLikeCustomArgs
	): Promise<boolean> {
		const {_count} = transformFields(graphqlFields(info as any));
		const showLike = await ctx.prisma.showLike.create({
			data: {
				show: {
					...args.data.show,
				},
				user: {
					connect: {
						id: ctx.req.session.userId,
					},
				},
			},
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});

		return Boolean(showLike);
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Boolean, {
		nullable: false,
	})
	async unlikeShow(@Ctx() ctx: Context, @Arg('showId', () => Int) showId: number): Promise<boolean> {
		if (ctx.req.session.userId === undefined) {
			throw new Error('User not logged in');
		}

		const showLike = await ctx.prisma.showLike.delete({
			where: {
				userId_showId: {
					userId: ctx.req.session.userId,
					showId,
				},
			},
		});

		return Boolean(showLike);
	}
}
