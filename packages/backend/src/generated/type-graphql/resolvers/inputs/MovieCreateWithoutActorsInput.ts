import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavouriteCreateNestedManyWithoutMoviesInput } from "../inputs/FavouriteCreateNestedManyWithoutMoviesInput";
import { GenreCreateNestedManyWithoutMoviesInput } from "../inputs/GenreCreateNestedManyWithoutMoviesInput";
import { PlatformCreateNestedManyWithoutMoviesInput } from "../inputs/PlatformCreateNestedManyWithoutMoviesInput";
import { RatingCreateNestedManyWithoutMoviesInput } from "../inputs/RatingCreateNestedManyWithoutMoviesInput";
import { ReviewCreateNestedManyWithoutMovieInput } from "../inputs/ReviewCreateNestedManyWithoutMovieInput";
import { SongInMovieCreateNestedManyWithoutMovieInput } from "../inputs/SongInMovieCreateNestedManyWithoutMovieInput";
import { WatchlistCreateNestedManyWithoutMoviesInput } from "../inputs/WatchlistCreateNestedManyWithoutMoviesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieCreateWithoutActorsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  overview!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  thumbnail?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  locked?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  released?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  runtime?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  revenue?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  trailer?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => RatingCreateNestedManyWithoutMoviesInput, {
    nullable: true
  })
  rating?: RatingCreateNestedManyWithoutMoviesInput | undefined;

  @TypeGraphQL.Field(_type => GenreCreateNestedManyWithoutMoviesInput, {
    nullable: true
  })
  genres?: GenreCreateNestedManyWithoutMoviesInput | undefined;

  @TypeGraphQL.Field(_type => PlatformCreateNestedManyWithoutMoviesInput, {
    nullable: true
  })
  platforms?: PlatformCreateNestedManyWithoutMoviesInput | undefined;

  @TypeGraphQL.Field(_type => SongInMovieCreateNestedManyWithoutMovieInput, {
    nullable: true
  })
  soundtrack?: SongInMovieCreateNestedManyWithoutMovieInput | undefined;

  @TypeGraphQL.Field(_type => FavouriteCreateNestedManyWithoutMoviesInput, {
    nullable: true
  })
  favourites?: FavouriteCreateNestedManyWithoutMoviesInput | undefined;

  @TypeGraphQL.Field(_type => WatchlistCreateNestedManyWithoutMoviesInput, {
    nullable: true
  })
  watchlist?: WatchlistCreateNestedManyWithoutMoviesInput | undefined;

  @TypeGraphQL.Field(_type => ReviewCreateNestedManyWithoutMovieInput, {
    nullable: true
  })
  reviews?: ReviewCreateNestedManyWithoutMovieInput | undefined;
}
