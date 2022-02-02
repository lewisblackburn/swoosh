import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInMovieCreateNestedManyWithoutMovieInput } from "../inputs/ActorInMovieCreateNestedManyWithoutMovieInput";
import { GenreCreateNestedManyWithoutMoviesInput } from "../inputs/GenreCreateNestedManyWithoutMoviesInput";
import { MovieLikeCreateNestedManyWithoutMovieInput } from "../inputs/MovieLikeCreateNestedManyWithoutMovieInput";
import { MovieReviewCreateNestedManyWithoutMovieInput } from "../inputs/MovieReviewCreateNestedManyWithoutMovieInput";
import { PlatformCreateNestedManyWithoutMoviesInput } from "../inputs/PlatformCreateNestedManyWithoutMoviesInput";
import { SongInMovieCreateNestedManyWithoutMovieInput } from "../inputs/SongInMovieCreateNestedManyWithoutMovieInput";

@TypeGraphQL.InputType("MovieCreateWithoutWatchlistInput", {
  isAbstract: true
})
export class MovieCreateWithoutWatchlistInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tagline!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  overview!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  poster?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  backdrop?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  locked?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  released?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  runtime?: number | undefined;

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
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ActorInMovieCreateNestedManyWithoutMovieInput, {
    nullable: true
  })
  actors?: ActorInMovieCreateNestedManyWithoutMovieInput | undefined;

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

  @TypeGraphQL.Field(_type => MovieReviewCreateNestedManyWithoutMovieInput, {
    nullable: true
  })
  reviews?: MovieReviewCreateNestedManyWithoutMovieInput | undefined;

  @TypeGraphQL.Field(_type => MovieLikeCreateNestedManyWithoutMovieInput, {
    nullable: true
  })
  likes?: MovieLikeCreateNestedManyWithoutMovieInput | undefined;
}
