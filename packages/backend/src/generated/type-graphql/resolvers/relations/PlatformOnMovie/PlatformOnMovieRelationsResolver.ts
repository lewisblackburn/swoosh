import * as TypeGraphQL from "type-graphql";
import { Movie } from "../../../models/Movie";
import { Platform } from "../../../models/Platform";
import { PlatformOnMovie } from "../../../models/PlatformOnMovie";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PlatformOnMovie)
export class PlatformOnMovieRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Platform, {
    nullable: false
  })
  async platform(@TypeGraphQL.Root() platformOnMovie: PlatformOnMovie, @TypeGraphQL.Ctx() ctx: any): Promise<Platform> {
    return getPrismaFromContext(ctx).platformOnMovie.findUnique({
      where: {
        platformId_movieId: {
          platformId: platformOnMovie.platformId,
          movieId: platformOnMovie.movieId,
        },
      },
    }).platform({});
  }

  @TypeGraphQL.FieldResolver(_type => Movie, {
    nullable: false
  })
  async movie(@TypeGraphQL.Root() platformOnMovie: PlatformOnMovie, @TypeGraphQL.Ctx() ctx: any): Promise<Movie> {
    return getPrismaFromContext(ctx).platformOnMovie.findUnique({
      where: {
        platformId_movieId: {
          platformId: platformOnMovie.platformId,
          movieId: platformOnMovie.movieId,
        },
      },
    }).movie({});
  }
}
