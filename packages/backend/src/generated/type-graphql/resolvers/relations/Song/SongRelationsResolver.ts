import * as TypeGraphQL from "type-graphql";
import { Favourite } from "../../../models/Favourite";
import { Genre } from "../../../models/Genre";
import { Person } from "../../../models/Person";
import { Review } from "../../../models/Review";
import { Song } from "../../../models/Song";
import { SongInMovie } from "../../../models/SongInMovie";
import { SongInShow } from "../../../models/SongInShow";
import { SongArtistsArgs } from "./args/SongArtistsArgs";
import { SongFavouritesArgs } from "./args/SongFavouritesArgs";
import { SongGenresArgs } from "./args/SongGenresArgs";
import { SongReviewsArgs } from "./args/SongReviewsArgs";
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

  @TypeGraphQL.FieldResolver(_type => [Favourite], {
    nullable: false
  })
  async favourites(@TypeGraphQL.Root() song: Song, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SongFavouritesArgs): Promise<Favourite[]> {
    return getPrismaFromContext(ctx).song.findUnique({
      where: {
        id: song.id,
      },
    }).favourites(args);
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

  @TypeGraphQL.FieldResolver(_type => [Review], {
    nullable: false
  })
  async reviews(@TypeGraphQL.Root() song: Song, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SongReviewsArgs): Promise<Review[]> {
    return getPrismaFromContext(ctx).song.findUnique({
      where: {
        id: song.id,
      },
    }).reviews(args);
  }
}
