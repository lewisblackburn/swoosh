import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {Arg, Args, Authorized, Ctx, Info, Int, Mutation, Query, Resolver, UseMiddleware} from 'type-graphql';
import {
	CreateMovieArgs,
	DeleteMovieArgs,
	FindManyMovieArgs,
	Movie,
	UpdateMovieArgs,
} from '../../generated/type-graphql';
import {transformCountFieldIntoSelectRelationsCount, transformFields} from '../../generated/type-graphql/helpers';
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
