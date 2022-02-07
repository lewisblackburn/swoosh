import * as TypeGraphQL from "type-graphql";
import { ArtistInSong } from "../../../models/ArtistInSong";
import { Person } from "../../../models/Person";
import { Song } from "../../../models/Song";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ArtistInSong)
export class ArtistInSongRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Song, {
    nullable: false
  })
  async song(@TypeGraphQL.Root() artistInSong: ArtistInSong, @TypeGraphQL.Ctx() ctx: any): Promise<Song> {
    return getPrismaFromContext(ctx).artistInSong.findUnique({
      where: {
        personId_songId: {
          personId: artistInSong.personId,
          songId: artistInSong.songId,
        },
      },
    }).song({});
  }

  @TypeGraphQL.FieldResolver(_type => Person, {
    nullable: false
  })
  async person(@TypeGraphQL.Root() artistInSong: ArtistInSong, @TypeGraphQL.Ctx() ctx: any): Promise<Person> {
    return getPrismaFromContext(ctx).artistInSong.findUnique({
      where: {
        personId_songId: {
          personId: artistInSong.personId,
          songId: artistInSong.songId,
        },
      },
    }).person({});
  }
}
