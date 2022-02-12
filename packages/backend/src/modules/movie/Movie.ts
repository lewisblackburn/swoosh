import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {
	Arg,
	Args,
	Authorized,
	Ctx,
	FieldResolver,
	Info,
	Int,
	Mutation,
	Query,
	Resolver,
	Root,
	UseMiddleware,
} from 'type-graphql';
import {
	AggregateMovieReview,
	AggregateMovieReviewArgs,
	CreateMovieArgs,
	DeleteMovieArgs,
	FindManyMovieArgs,
	Movie,
	UpdateMovieArgs,
} from '../../generated/type-graphql';
import {
	getPrismaFromContext,
	transformCountFieldIntoSelectRelationsCount,
	transformFields,
} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';
import {ErrorInterceptor} from '../middleware/ErrorInterceptor';

@Resolver(Movie)
export class MovieResolver {
	@FieldResolver(() => Boolean, {
		nullable: false,
	})
	async isLiked(@Root() root: Movie, @Ctx() ctx: Context, @Info() info: GraphQLResolveInfo): Promise<boolean> {
		if (!ctx.req.session.userId) {
			throw new Error('No User');
		}

		const movieLike = await ctx.prisma.movieLike.findUnique({
			where: {
				userId_movieId: {
					movieId: root.id,
					userId: ctx.req.session.userId,
				},
			},
			...transformFields(graphqlFields(info as any)),
		});

		return Boolean(movieLike);
	}

	@FieldResolver(() => Boolean)
	async isInWatchlist(@Root() root: Movie, @Ctx() ctx: Context): Promise<boolean> {
		if (!ctx.req.session.userId) return false;

		const watchlist = await ctx.prisma.movie
			.findUnique({
				where: {
					id: root.id,
				},
			})
			.watchlist({
				where: {
					userId: ctx.req.session.userId,
				},
			});

		// If the array is empty, the movie is not in the watchlist else it is and we return true
		return Boolean(watchlist.length);
	}

	@FieldResolver(() => AggregateMovieReview, {
		nullable: false,
	})
	async aggregateMovieReview(
		@Root() root: Movie,
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: AggregateMovieReviewArgs
	): Promise<AggregateMovieReview> {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return getPrismaFromContext(ctx).movieReview.aggregate({
			...args,
			where: {
				movieId: root.id,
			},
			...transformFields(graphqlFields(info as any)),
		});
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Movie, {
		nullable: false,
	})
	async createMovie(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: CreateMovieArgs
	): Promise<Movie> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.movie.create({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Movie, {
		nullable: true,
	})
	async updateMovie(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: UpdateMovieArgs
	): Promise<Movie | null> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.movie.update({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Authorized(['ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Movie, {nullable: true})
	async lockMovie(
		@Ctx() ctx: Context,
		@Arg('movieId', () => Int) movieId: number,
		@Arg('lock') lock: boolean
	): Promise<Movie | null> {
		return ctx.prisma.movie.update({
			where: {
				id: movieId,
			},
			data: {
				locked: lock,
			},
		});
	}

	@Authorized(['ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Movie, {nullable: true})
	async deleteMovie(@Ctx() ctx: Context, @Args() args: DeleteMovieArgs): Promise<Movie | null> {
		return ctx.prisma.movie.delete({
			...args,
		});
	}

	@Query(() => Movie, {
		nullable: true,
	})
	async movie(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Arg('movieId', () => Int) movieId: number
	): Promise<Movie | null> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.movie.findUnique({
			where: {
				id: movieId,
			},
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Query(() => [Movie], {nullable: true})
	async movies(@Args() args: FindManyMovieArgs, @Ctx() ctx: Context): Promise<Movie[] | null> {
		return ctx.prisma.movie.findMany({
			...args,
		});
	}
}
