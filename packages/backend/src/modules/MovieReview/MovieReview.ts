import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {Arg, Args, Authorized, Ctx, Info, Int, Mutation, Query, Resolver, UseMiddleware} from 'type-graphql';
import {FindManyMovieReviewArgs, MovieReview, UpdateMovieReviewArgs} from '../../generated/type-graphql';
import {transformCountFieldIntoSelectRelationsCount, transformFields} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';
import {ErrorInterceptor} from '../middleware/ErrorInterceptor';
import {CreateMovieReviewCustomArgs} from './args/CreateMovieReviewCustomArgs';

@Resolver(MovieReview)
export class MovieReviewResolver {
	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Query(() => [MovieReview], {
		nullable: false,
	})
	async movieReviews(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: FindManyMovieReviewArgs
	): Promise<MovieReview[]> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.movieReview.findMany({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Boolean, {
		nullable: false,
	})
	async createMovieReview(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: CreateMovieReviewCustomArgs
	): Promise<boolean> {
		const {_count} = transformFields(graphqlFields(info as any));
		const movieReview = await ctx.prisma.movieReview.create({
			data: {
				rating: args.data.rating,
				review: args.data.review,
				movie: {
					...args.data.movie,
				},
				user: {
					connect: {
						id: ctx.req.session.userId,
					},
				},
			},
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});

		return Boolean(movieReview);
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => MovieReview, {
		nullable: false,
	})
	async updateMovieReview(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: UpdateMovieReviewArgs
	): Promise<MovieReview> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.movieReview.update({
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
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Boolean, {
		nullable: false,
	})
	async deleteMovieReview(@Ctx() ctx: Context, @Arg('movieId', () => Int) movieId: number): Promise<boolean> {
		if (ctx.req.session.userId === undefined) {
			throw new Error('User not logged in');
		}

		const movieReview = await ctx.prisma.movieReview.delete({
			where: {
				userId_movieId: {
					userId: ctx.req.session.userId,
					movieId,
				},
			},
		});

		return Boolean(movieReview);
	}
}
