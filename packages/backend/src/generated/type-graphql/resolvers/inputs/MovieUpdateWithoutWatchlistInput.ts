import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInMovieUpdateManyWithoutMovieInput } from "../inputs/ActorInMovieUpdateManyWithoutMovieInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { GenreUpdateManyWithoutMoviesInput } from "../inputs/GenreUpdateManyWithoutMoviesInput";
import { MovieLikeUpdateManyWithoutMovieInput } from "../inputs/MovieLikeUpdateManyWithoutMovieInput";
import { MovieReviewUpdateManyWithoutMovieInput } from "../inputs/MovieReviewUpdateManyWithoutMovieInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableFloatFieldUpdateOperationsInput } from "../inputs/NullableFloatFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PlatformUpdateManyWithoutMoviesInput } from "../inputs/PlatformUpdateManyWithoutMoviesInput";
import { SongInMovieUpdateManyWithoutMovieInput } from "../inputs/SongInMovieUpdateManyWithoutMovieInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MovieUpdateWithoutWatchlistInput", {
  isAbstract: true
})
export class MovieUpdateWithoutWatchlistInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  tagline?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  overview?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  poster?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  backdrop?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  locked?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  released?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput, {
    nullable: true
  })
  runtime?: NullableFloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  trailer?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  rating?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ActorInMovieUpdateManyWithoutMovieInput, {
    nullable: true
  })
  actors?: ActorInMovieUpdateManyWithoutMovieInput | undefined;

  @TypeGraphQL.Field(_type => GenreUpdateManyWithoutMoviesInput, {
    nullable: true
  })
  genres?: GenreUpdateManyWithoutMoviesInput | undefined;

  @TypeGraphQL.Field(_type => PlatformUpdateManyWithoutMoviesInput, {
    nullable: true
  })
  platforms?: PlatformUpdateManyWithoutMoviesInput | undefined;

  @TypeGraphQL.Field(_type => SongInMovieUpdateManyWithoutMovieInput, {
    nullable: true
  })
  soundtrack?: SongInMovieUpdateManyWithoutMovieInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewUpdateManyWithoutMovieInput, {
    nullable: true
  })
  reviews?: MovieReviewUpdateManyWithoutMovieInput | undefined;

  @TypeGraphQL.Field(_type => MovieLikeUpdateManyWithoutMovieInput, {
    nullable: true
  })
  likes?: MovieLikeUpdateManyWithoutMovieInput | undefined;
}
