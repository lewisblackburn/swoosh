import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { GenreUpdateManyWithoutSongsInput } from "../inputs/GenreUpdateManyWithoutSongsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { PersonUpdateManyWithoutSongsInput } from "../inputs/PersonUpdateManyWithoutSongsInput";
import { SongInShowUpdateManyWithoutSongInput } from "../inputs/SongInShowUpdateManyWithoutSongInput";
import { SongLikeUpdateManyWithoutSongInput } from "../inputs/SongLikeUpdateManyWithoutSongInput";
import { SongReviewUpdateManyWithoutSongInput } from "../inputs/SongReviewUpdateManyWithoutSongInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("SongUpdateWithoutSongInMovieInput", {
  isAbstract: true
})
export class SongUpdateWithoutSongInMovieInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  poster?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  locked?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  released?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpdateManyWithoutSongsInput, {
    nullable: true
  })
  artists?: PersonUpdateManyWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => SongInShowUpdateManyWithoutSongInput, {
    nullable: true
  })
  songInShow?: SongInShowUpdateManyWithoutSongInput | undefined;

  @TypeGraphQL.Field(_type => GenreUpdateManyWithoutSongsInput, {
    nullable: true
  })
  genres?: GenreUpdateManyWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => SongReviewUpdateManyWithoutSongInput, {
    nullable: true
  })
  reviews?: SongReviewUpdateManyWithoutSongInput | undefined;

  @TypeGraphQL.Field(_type => SongLikeUpdateManyWithoutSongInput, {
    nullable: true
  })
  likes?: SongLikeUpdateManyWithoutSongInput | undefined;
}
