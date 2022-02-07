import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {Args, Authorized, Ctx, Info, Mutation, Query, Resolver, UseMiddleware} from 'type-graphql';
import {
	CreateShowReviewLikeArgs,
	DeleteShowReviewLikeArgs,
	FindManyShowReviewLikeArgs,
	ShowReviewLike,
} from '../../generated/type-graphql';
import {transformCountFieldIntoSelectRelationsCount, transformFields} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';
import {ErrorInterceptor} from '../middleware/ErrorInterceptor';

@Resolver(ShowReviewLike)
export class ShowReviewLikeResolver {
	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Query(() => [ShowReviewLike], {
		nullable: false,
	})
	async showReviewLikes(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: FindManyShowReviewLikeArgs
	): Promise<ShowReviewLike[]> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.showReviewLike.findMany({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Boolean, {
		nullable: false,
	})
	async createShowReviewLike(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: CreateShowReviewLikeArgs
	): Promise<boolean> {
		const {_count} = transformFields(graphqlFields(info as any));
		const showReviewLike = await ctx.prisma.showReviewLike.create({
			...args,
			data: {
				user: {
					connect: {
						id: ctx.req.session.userId,
					},
				},
			},
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});

		return Boolean(showReviewLike);
	}

	@Mutation(() => Boolean, {
		nullable: true,
	})
	async deleteShowReviewLike(@Ctx() ctx: Context, @Args() args: DeleteShowReviewLikeArgs): Promise<boolean> {
		if (!ctx.req.session.userId) return false;
		if (!args.where.userId_reviewUserId_reviewShowId) return false;

		const showReviewLike = await ctx.prisma.showReviewLike.delete({
			where: {
				userId_reviewUserId_reviewShowId: {
					...args.where.userId_reviewUserId_reviewShowId,
					userId: ctx.req.session.userId,
				},
			},
		});

		return Boolean(showReviewLike);
	}
}
