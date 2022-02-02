import * as TypeGraphQL from "type-graphql";
import { Movie } from "../../../models/Movie";
import { MovieLike } from "../../../models/MovieLike";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieLike)
export class MovieLikeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() movieLike: MovieLike, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).movieLike.findUnique({
      where: {
        userId_movieId: {
          userId: movieLike.userId,
          movieId: movieLike.movieId,
        },
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Movie, {
    nullable: false
  })
  async movie(@TypeGraphQL.Root() movieLike: MovieLike, @TypeGraphQL.Ctx() ctx: any): Promise<Movie> {
    return getPrismaFromContext(ctx).movieLike.findUnique({
      where: {
        userId_movieId: {
          userId: movieLike.userId,
          movieId: movieLike.movieId,
        },
      },
    }).movie({});
  }
}
