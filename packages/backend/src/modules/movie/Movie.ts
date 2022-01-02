import {
	CreateMovieArgs,
	DeleteMovieArgs,
	FindManyMovieArgs,
	Movie,
	Person,
	UpdateMovieArgs,
} from '../../generated/type-graphql';
import {Context} from '../../interfaces/context';
import {Arg, Args, Authorized, Ctx, Int, Mutation, Query, Resolver, UseMiddleware} from 'type-graphql';
import {ErrorInterceptor} from '../middleware/ErrorInterceptor';

@Resolver(Movie)
export class MovieResolver {
	@Authorized(['ADMIN', 'USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Movie, {nullable: true})
	async createMovie(@Ctx() ctx: Context, @Args() args: CreateMovieArgs): Promise<Movie | null> {
		return ctx.prisma.movie.create({
			data: {
				title: args.data.title,
				description: args.data.description,
			},
		});
	}

	@Authorized(['ADMIN', 'USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Movie, {nullable: true})
	async editMovie(@Ctx() ctx: Context, @Args() args: UpdateMovieArgs): Promise<Movie | null> {
		return ctx.prisma.movie.update({
			data: {
				title: args.data.title,
				description: args.data.description,
			},
			where: {
				id: args.where.id,
			},
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

	@Authorized(['ADMIN', 'USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Boolean, {nullable: true})
	async addActor(
		@Ctx() ctx: Context,
		@Arg('personId', () => Int) personId: number,
		@Arg('movieId', () => Int) movieId: number,
		@Arg('role') role: string
	): Promise<Boolean> {
		const actor = await ctx.prisma.actorInMovie.create({
			data: {
				movieId,
				personId,
				role,
			},
		});

		return !!actor;
	}

	@Authorized(['ADMIN', 'USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Movie, {nullable: true})
	async removeActor(
		@Ctx() ctx: Context,
		@Arg('personId', () => Int) personId: number,
		@Arg('movieId', () => Int) movieId: number
	): Promise<Boolean> {
		const actor = await ctx.prisma.actorInMovie.delete({
			where: {
				personId_movieId: {
					movieId,
					personId,
				},
			},
		});

		return !!actor;
	}

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
