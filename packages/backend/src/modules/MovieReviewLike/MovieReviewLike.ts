import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {Args, Authorized, Ctx, Info, Mutation, Query, Resolver, UseMiddleware} from 'type-graphql';
import {
	CreateMovieReviewLikeArgs,
	DeleteMovieReviewLikeArgs,
	FindManyMovieReviewLikeArgs,
	MovieReviewLike,
} from '../../generated/type-graphql';
import {transformCountFieldIntoSelectRelationsCount, transformFields} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';
import {ErrorInterceptor} from '../middleware/ErrorInterceptor';

@Resolver(MovieReviewLike)
export class MovieReviewLikeResolver {
	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Query(() => [MovieReviewLike], {
		nullable: false,
	})
	async movieReviewLikes(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: FindManyMovieReviewLikeArgs
	): Promise<MovieReviewLike[]> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.movieReviewLike.findMany({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Boolean, {
		nullable: false,
	})
	async createMovieReviewLike(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: CreateMovieReviewLikeArgs
	): Promise<boolean> {
		const {_count} = transformFields(graphqlFields(info as any));
		const movieReviewLike = await ctx.prisma.movieReviewLike.create({
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

		return Boolean(movieReviewLike);
	}

	@Mutation(() => Boolean, {
		nullable: true,
	})
	async deleteMovieReviewLike(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: DeleteMovieReviewLikeArgs
	): Promise<boolean> {
		if (!ctx.req.session.userId) return false;
		if (!args.where.userId_reviewUserId_reviewMovieId) return false;

		const movieReviewLike = await ctx.prisma.movieReviewLike.delete({
			where: {
				userId_reviewUserId_reviewMovieId: {
					...args.where.userId_reviewUserId_reviewMovieId,
					userId: ctx.req.session.userId,
				},
			},
		});

		return Boolean(movieReviewLike);
	}
}
