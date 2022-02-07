import * as TypeGraphQL from "type-graphql";
import { ArtistInSong } from "../../../models/ArtistInSong";
import { Genre } from "../../../models/Genre";
import { Song } from "../../../models/Song";
import { SongInMovie } from "../../../models/SongInMovie";
import { SongInShow } from "../../../models/SongInShow";
import { SongLike } from "../../../models/SongLike";
import { SongReview } from "../../../models/SongReview";
import { SongArtistsArgs } from "./args/SongArtistsArgs";
import { SongGenresArgs } from "./args/SongGenresArgs";
import { SongLikesArgs } from "./args/SongLikesArgs";
import { SongReviewsArgs } from "./args/SongReviewsArgs";
import { SongSongInMovieArgs } from "./args/SongSongInMovieArgs";
import { SongSongInShowArgs } from "./args/SongSongInShowArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Song)
export class SongRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [ArtistInSong], {
    nullable: false
  })
  async artists(@TypeGraphQL.Root() song: Song, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SongArtistsArgs): Promise<ArtistInSong[]> {
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

  @TypeGraphQL.FieldResolver(_type => [Genre], {
    nullable: false
  })
  async genres(@TypeGraphQL.Root() song: Song, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SongGenresArgs): Promise<Genre[]> {
    return getPrismaFromContext(ctx).song.findUnique({
      where: {
        id: song.id,
      },
    }).genres(args);
  }

  @TypeGraphQL.FieldResolver(_type => [SongReview], {
    nullable: false
  })
  async reviews(@TypeGraphQL.Root() song: Song, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SongReviewsArgs): Promise<SongReview[]> {
    return getPrismaFromContext(ctx).song.findUnique({
      where: {
        id: song.id,
      },
    }).reviews(args);
  }

  @TypeGraphQL.FieldResolver(_type => [SongLike], {
    nullable: false
  })
  async likes(@TypeGraphQL.Root() song: Song, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SongLikesArgs): Promise<SongLike[]> {
    return getPrismaFromContext(ctx).song.findUnique({
      where: {
        id: song.id,
      },
    }).likes(args);
  }
}
