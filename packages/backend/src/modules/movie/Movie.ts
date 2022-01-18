import {transformFields, transformCountFieldIntoSelectRelationsCount} from '../../generated/type-graphql/helpers';
import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {Arg, Args, Authorized, Ctx, Info, Int, Mutation, Query, Resolver, UseMiddleware} from 'type-graphql';
import {
	CreateMovieArgs,
	DeleteMovieArgs,
	DeleteSongInMovieArgs,
	FindManyMovieArgs,
	Movie,
	UpdateMovieArgs,
} from '../../generated/type-graphql';
import {Context} from '../../interfaces/context';
import {ErrorInterceptor} from '../middleware/ErrorInterceptor';

@Resolver(Movie)
export class MovieResolver {
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
	async editMovie(
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

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Boolean, {nullable: true})
	async addActorToMovie(
		@Ctx() ctx: Context,
		@Arg('personId', () => Int) personId: number,
		@Arg('movieId', () => Int) movieId: number,
		@Arg('role') role: string
	): Promise<boolean> {
		const actor = await ctx.prisma.actorInMovie.create({
			data: {
				movieId,
				personId,
				role,
			},
		});

		return Boolean(actor);
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Boolean, {nullable: false})
	async removeActorFromMovie(
		@Ctx() ctx: Context,
		@Arg('personId', () => Int) personId: number,
		@Arg('movieId', () => Int) movieId: number
	): Promise<boolean> {
		const actor = await ctx.prisma.actorInMovie.delete({
			where: {
				personId_movieId: {
					movieId,
					personId,
				},
			},
		});

		return Boolean(actor);
	}

	// eslint-disable-next-line max-params
	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Boolean, {
		nullable: false,
	})
	async addSongToMovie(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Arg('movieId', () => Int) movieId: number,
		@Arg('songId', () => Int) songId: number,
		@Arg('timestamp') timestamp: Date,
		@Arg('description') description: string
	): Promise<boolean> {
		const song = ctx.prisma.songInMovie.create({
			data: {
				movieId,
				songId,
				timestamp,
				description,
			},
		});

		return Boolean(song);
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Boolean, {
		nullable: false,
	})
	async removeSongFromMovie(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: DeleteSongInMovieArgs
	): Promise<boolean> {
		const song = ctx.prisma.songInMovie.delete({
			...args,
		});

		return Boolean(song);
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Boolean, {
		nullable: false,
	})
	async addPlatformToMovie(
		@Ctx() ctx: Context,
		@Arg('platformId', () => Int) platformId: number,
		@Arg('movieId', () => Int) movieId: number
	): Promise<boolean> {
		const platform = ctx.prisma.platform.update({
			where: {
				id: platformId,
			},
			data: {
				movies: {
					connect: {
						id: movieId,
					},
				},
			},
		});

		return Boolean(platform);
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Boolean, {
		nullable: false,
	})
	async removePlatformToMovie(
		@Ctx() ctx: Context,
		@Arg('platformId', () => Int) platformId: number,
		@Arg('movieId', () => Int) movieId: number
	): Promise<boolean> {
		const platform = ctx.prisma.platform.update({
			where: {
				id: platformId,
			},
			data: {
				movies: {
					disconnect: {
						id: movieId,
					},
				},
			},
		});

		return Boolean(platform);
	}

	// Need to make a review query to separately retrieve the reviews
	@Query(() => Movie, {nullable: true})
	async movie(@Arg('movieId', () => Int) movieId: number, @Ctx() ctx: Context): Promise<Movie | null> {
		return ctx.prisma.movie.findUnique({
			where: {
				id: movieId,
			},
		});
	}

	@Query(() => [Movie], {nullable: true})
	async movies(@Args() args: FindManyMovieArgs, @Ctx() ctx: Context): Promise<Movie[] | null> {
		return ctx.prisma.movie.findMany({
			...args,
		});
	}
}
