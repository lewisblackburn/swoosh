import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInMovieCreateNestedManyWithoutMovieInput } from "../inputs/ActorInMovieCreateNestedManyWithoutMovieInput";
import { GenreCreateNestedManyWithoutMoviesInput } from "../inputs/GenreCreateNestedManyWithoutMoviesInput";
import { MovieReviewCreateNestedManyWithoutMovieInput } from "../inputs/MovieReviewCreateNestedManyWithoutMovieInput";
import { SongInMovieCreateNestedManyWithoutMovieInput } from "../inputs/SongInMovieCreateNestedManyWithoutMovieInput";
import { WatchlistCreateNestedManyWithoutMoviesInput } from "../inputs/WatchlistCreateNestedManyWithoutMoviesInput";

@TypeGraphQL.InputType("MovieCreateWithoutPlatformsInput", {
  isAbstract: true
})
export class MovieCreateWithoutPlatformsInput {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rating?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ActorInMovieCreateNestedManyWithoutMovieInput, {
    nullable: true
  })
  actors?: ActorInMovieCreateNestedManyWithoutMovieInput | undefined;

  @TypeGraphQL.Field(_type => GenreCreateNestedManyWithoutMoviesInput, {
    nullable: true
  })
  genres?: GenreCreateNestedManyWithoutMoviesInput | undefined;

  @TypeGraphQL.Field(_type => SongInMovieCreateNestedManyWithoutMovieInput, {
    nullable: true
  })
  soundtrack?: SongInMovieCreateNestedManyWithoutMovieInput | undefined;

  @TypeGraphQL.Field(_type => WatchlistCreateNestedManyWithoutMoviesInput, {
    nullable: true
  })
  watchlist?: WatchlistCreateNestedManyWithoutMoviesInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewCreateNestedManyWithoutMovieInput, {
    nullable: true
  })
  review?: MovieReviewCreateNestedManyWithoutMovieInput | undefined;
}
