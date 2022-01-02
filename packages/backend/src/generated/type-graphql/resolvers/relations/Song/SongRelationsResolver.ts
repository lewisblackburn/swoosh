import * as TypeGraphQL from "type-graphql";
import { Person } from "../../../models/Person";
import { Song } from "../../../models/Song";
import { SongInMovie } from "../../../models/SongInMovie";
import { SongInShow } from "../../../models/SongInShow";
import { SongArtistsArgs } from "./args/SongArtistsArgs";
import { SongSongInMovieArgs } from "./args/SongSongInMovieArgs";
import { SongSongInShowArgs } from "./args/SongSongInShowArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Song)
export class SongRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Person], {
    nullable: false
  })
  async artists(@TypeGraphQL.Root() song: Song, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SongArtistsArgs): Promise<Person[]> {
    return getPrismaFromContext(ctx).song.findUnique({
      where: {
        id: song.id,
      },
    }).artists(args);
  }

  @TypeGraphQL.FieldResolver(_type => [SongInShow], {
    nullable: false
  })
  async songInShow(@TypeGraphQL.Root() song: Song, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SongSongInShowArgs): Promise<SongInShow[]> {
    return getPrismaFromContext(ctx).song.findUnique({
      where: {
        id: song.id,
      },
    }).songInShow(args);
  }

  @TypeGraphQL.FieldResolver(_type => [SongInMovie], {
    nullable: false
  })
  async songInMovie(@TypeGraphQL.Root() song: Song, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SongSongInMovieArgs): Promise<SongInMovie[]> {
    return getPrismaFromContext(ctx).song.findUnique({
      where: {
        id: song.id,
      },
    }).songInMovie(args);
  }
}
