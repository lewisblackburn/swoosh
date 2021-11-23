import { Movie } from "backend/src/generated/type-graphql";
import { Context } from "backend/src/interfaces/context";
import { Arg, Ctx, Int, Query, Resolver } from "type-graphql";

@Resolver(Movie) export class MovieResolver {
    @Query(() => Movie, { nullable: true })
    async movie(
        @Arg("id", () => Int) id: number,
        @Ctx() ctx: Context
    ): Promise<Movie | null> {
        return ctx.prisma.movie.findUnique({
            where: {
                id
            }
        });
    }

    @Query(() => Movie, { nullable: true })
    async movies(
        @Arg("title", () => String) title: string,
        @Ctx() ctx: Context
    ): Promise<Movie[] | null> {
        return ctx.prisma.movie.findMany({
            where: {
                title
            }
        });
    }

}
