import * as TypeGraphQL from "type-graphql";
import { Show } from "../../../models/Show";
import { Song } from "../../../models/Song";
import { SongInShow } from "../../../models/SongInShow";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SongInShow)
export class SongInShowRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Song, {
    nullable: false
  })
  async song(@TypeGraphQL.Root() songInShow: SongInShow, @TypeGraphQL.Ctx() ctx: any): Promise<Song> {
    return getPrismaFromContext(ctx).songInShow.findUnique({
      where: {
        songId_showId: {
          songId: songInShow.songId,
          showId: songInShow.showId,
        },
      },
    }).song({});
  }

  @TypeGraphQL.FieldResolver(_type => Show, {
    nullable: false
  })
  async show(@TypeGraphQL.Root() songInShow: SongInShow, @TypeGraphQL.Ctx() ctx: any): Promise<Show> {
    return getPrismaFromContext(ctx).songInShow.findUnique({
      where: {
        songId_showId: {
          songId: songInShow.songId,
          showId: songInShow.showId,
        },
      },
    }).show({});
  }
}
