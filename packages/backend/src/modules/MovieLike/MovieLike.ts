import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {Arg, Args, Authorized, Ctx, Info, Int, Mutation, Query, Resolver, UseMiddleware} from 'type-graphql';
import {FindManyMovieLikeArgs, MovieLike} from '../../generated/type-graphql';
import {transformCountFieldIntoSelectRelationsCount, transformFields} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';
import {ErrorInterceptor} from '../middleware/ErrorInterceptor';
import {CreateMovieLikeCustomArgs} from './args/CreateMovieLikeCustomArgs';

@Resolver(MovieLike)
export class MovieLikeResolver {
	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Query(() => [MovieLike], {
		nullable: false,
	})
	async likedMovies(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: FindManyMovieLikeArgs
	): Promise<MovieLike[]> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.movieLike.findMany({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Boolean, {
		nullable: false,
	})
	async likeMovie(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: CreateMovieLikeCustomArgs
	): Promise<boolean> {
		const {_count} = transformFields(graphqlFields(info as any));
		const movieLike = await ctx.prisma.movieLike.create({
			data: {
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

		return Boolean(movieLike);
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Boolean, {
		nullable: false,
	})
	async unlikeMovie(@Ctx() ctx: Context, @Arg('movieId', () => Int) movieId: number): Promise<boolean> {
		if (ctx.req.session.userId === undefined) {
			throw new Error('User not logged in');
		}

		const movieLike = await ctx.prisma.movieLike.delete({
			where: {
				userId_movieId: {
					userId: ctx.req.session.userId,
					movieId,
				},
			},
		});

		return Boolean(movieLike);
	}
}
