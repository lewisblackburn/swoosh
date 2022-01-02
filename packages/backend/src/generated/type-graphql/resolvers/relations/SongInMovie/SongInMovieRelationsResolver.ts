import * as TypeGraphQL from "type-graphql";
import { Movie } from "../../../models/Movie";
import { Song } from "../../../models/Song";
import { SongInMovie } from "../../../models/SongInMovie";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SongInMovie)
export class SongInMovieRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Song, {
    nullable: false
  })
  async song(@TypeGraphQL.Root() songInMovie: SongInMovie, @TypeGraphQL.Ctx() ctx: any): Promise<Song> {
    return getPrismaFromContext(ctx).songInMovie.findUnique({
      where: {
        songId_movieId: {
          songId: songInMovie.songId,
          movieId: songInMovie.movieId,
        },
      },
    }).song({});
  }

  @TypeGraphQL.FieldResolver(_type => Movie, {
    nullable: false
  })
  async movie(@TypeGraphQL.Root() songInMovie: SongInMovie, @TypeGraphQL.Ctx() ctx: any): Promise<Movie> {
    return getPrismaFromContext(ctx).songInMovie.findUnique({
      where: {
        songId_movieId: {
          songId: songInMovie.songId,
          movieId: songInMovie.movieId,
        },
      },
    }).movie({});
  }
}
