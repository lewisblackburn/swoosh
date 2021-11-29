import { CreateMovieArgs, DeleteMovieArgs, Movie, UpdateMovieArgs } from "../../generated/type-graphql";
import { Context } from "../../interfaces/context";
import { Arg, Args, Authorized, Ctx, Int, Mutation, Query, Resolver } from "type-graphql";


@Resolver(Movie) export class MovieResolver {
    @Authorized(["ADMIN", "USER"])
    @Mutation(() => Movie, { nullable: true })
    async createMovie(
        @Ctx() ctx: Context,
        @Args() args: CreateMovieArgs
    ): Promise<Movie | null> {
        return ctx.prisma.movie.create({
            data: {
                title: args.data.title,
                description: args.data.description,
            }
        })
    }

    @Authorized(["ADMIN", "USER"])
    @Mutation(() => Movie, { nullable: true })
    async editMovie(
        @Ctx() ctx: Context,
        @Args() args: UpdateMovieArgs
    ): Promise<Movie | null> {
        return ctx.prisma.movie.update({
            data: {
                title: args.data.title,
                description: args.data.description,
            },
            where: {
                id: args.where.id
            }
        })
    }

    @Authorized(["ADMIN"])
    @Mutation(() => Movie, { nullable: true })
    async lockMovie(
        @Ctx() ctx: Context,
        @Arg("movieId", () => Int) movieId: number,
        @Arg("lock") lock: boolean,
    ): Promise<Movie | null> {
        return ctx.prisma.movie.update({
            where: {
                id: movieId
            },
            data: {
                locked: lock
            }
        })
    }

    @Authorized(["ADMIN"])
    @Mutation(() => Movie, { nullable: true })
    async deleteMovie(
        @Ctx() ctx: Context,
        @Args() args: DeleteMovieArgs
    ): Promise<Movie | null> {
        return ctx.prisma.movie.delete({
            ...args
        })
    }

    @Authorized(["ADMIN", "USER"])
    @Mutation(() => Movie, { nullable: true })
    async addActor(
        @Ctx() ctx: Context,
        @Arg("personId", () => Int) personId: number,
        @Arg("movieId", () => Int) movieId: number,
    ): Promise<Movie | null> {
        return ctx.prisma.movie.update({
            where: {
                id: movieId
            },
            data: {
                actors: {
                    connect: {
                        id: personId
                    }
                }
            },
        })
    }

    @Authorized(["ADMIN", "USER"])
    @Mutation(() => Movie, { nullable: true })
    async removeActor(
        @Ctx() ctx: Context,
        @Arg("personId", () => Int) personId: number,
        @Arg("movieId", () => Int) movieId: number,
    ): Promise<Movie | null> {
        return ctx.prisma.movie.update({
            where: {
                id: movieId
            },
            data: {
                actors: {
                    disconnect: {
                        id: personId
                    }
                }
            },
        })
    }


    @Query(() => Movie, { nullable: true })
    async movie(
        @Arg("movieId", () => Int) movieId: number,
        @Ctx() ctx: Context
    ): Promise<Movie | null> {
        return ctx.prisma.movie.findUnique({
            where: {
                id: movieId
            }
        });
    }

    @Query(() => [Movie], { nullable: true })
    async movies(
        @Arg("title", () => String) title: string,
        @Ctx() ctx: Context
    ): Promise<Movie[] | null> {
        return ctx.prisma.movie.findMany({
            where: {
                title: {
                    contains: title
                }
            }
        });
    }

}
