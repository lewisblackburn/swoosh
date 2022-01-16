import * as TypeGraphQL from "type-graphql";
import { ActorInMovie } from "../../../models/ActorInMovie";
import { Favourite } from "../../../models/Favourite";
import { Genre } from "../../../models/Genre";
import { Movie } from "../../../models/Movie";
import { Platform } from "../../../models/Platform";
import { Rating } from "../../../models/Rating";
import { Review } from "../../../models/Review";
import { SongInMovie } from "../../../models/SongInMovie";
import { Watchlist } from "../../../models/Watchlist";
import { MovieActorsArgs } from "./args/MovieActorsArgs";
import { MovieFavouritesArgs } from "./args/MovieFavouritesArgs";
import { MovieGenresArgs } from "./args/MovieGenresArgs";
import { MoviePlatformsArgs } from "./args/MoviePlatformsArgs";
import { MovieRatingArgs } from "./args/MovieRatingArgs";
import { MovieReviewsArgs } from "./args/MovieReviewsArgs";
import { MovieSoundtrackArgs } from "./args/MovieSoundtrackArgs";
import { MovieWatchlistArgs } from "./args/MovieWatchlistArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Movie)
export class MovieRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Rating], {
    nullable: false
  })
  async rating(@TypeGraphQL.Root() movie: Movie, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: MovieRatingArgs): Promise<Rating[]> {
    return getPrismaFromContext(ctx).movie.findUnique({
      where: {
        id: movie.id,
      },
    }).rating(args);
  }

  @TypeGraphQL.FieldResolver(_type => [ActorInMovie], {
    nullable: false
  })
  async actors(@TypeGraphQL.Root() movie: Movie, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: MovieActorsArgs): Promise<ActorInMovie[]> {
    return getPrismaFromContext(ctx).movie.findUnique({
      where: {
        id: movie.id,
      },
    }).actors(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Genre], {
    nullable: false
  })
  async genres(@TypeGraphQL.Root() movie: Movie, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: MovieGenresArgs): Promise<Genre[]> {
    return getPrismaFromContext(ctx).movie.findUnique({
      where: {
        id: movie.id,
      },
    }).genres(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Platform], {
    nullable: false
  })
  async platforms(@TypeGraphQL.Root() movie: Movie, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: MoviePlatformsArgs): Promise<Platform[]> {
    return getPrismaFromContext(ctx).movie.findUnique({
      where: {
        id: movie.id,
      },
    }).platforms(args);
  }

  @TypeGraphQL.FieldResolver(_type => [SongInMovie], {
    nullable: false
  })
  async soundtrack(@TypeGraphQL.Root() movie: Movie, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: MovieSoundtrackArgs): Promise<SongInMovie[]> {
    return getPrismaFromContext(ctx).movie.findUnique({
      where: {
        id: movie.id,
      },
    }).soundtrack(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Favourite], {
    nullable: false
  })
  async favourites(@TypeGraphQL.Root() movie: Movie, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: MovieFavouritesArgs): Promise<Favourite[]> {
    return getPrismaFromContext(ctx).movie.findUnique({
      where: {
        id: movie.id,
      },
    }).favourites(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Watchlist], {
    nullable: false
  })
  async watchlist(@TypeGraphQL.Root() movie: Movie, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: MovieWatchlistArgs): Promise<Watchlist[]> {
    return getPrismaFromContext(ctx).movie.findUnique({
      where: {
        id: movie.id,
      },
    }).watchlist(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Review], {
    nullable: false
  })
  async reviews(@TypeGraphQL.Root() movie: Movie, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: MovieReviewsArgs): Promise<Review[]> {
    return getPrismaFromContext(ctx).movie.findUnique({
      where: {
        id: movie.id,
      },
    }).reviews(args);
  }
}
