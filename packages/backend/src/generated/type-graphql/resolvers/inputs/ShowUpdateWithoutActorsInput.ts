import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { GenreUpdateManyWithoutShowsInput } from "../inputs/GenreUpdateManyWithoutShowsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { PlatformUpdateManyWithoutShowsInput } from "../inputs/PlatformUpdateManyWithoutShowsInput";
import { ShowReviewUpdateManyWithoutShowInput } from "../inputs/ShowReviewUpdateManyWithoutShowInput";
import { SongInShowUpdateManyWithoutShowInput } from "../inputs/SongInShowUpdateManyWithoutShowInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { WatchlistUpdateManyWithoutShowsInput } from "../inputs/WatchlistUpdateManyWithoutShowsInput";

@TypeGraphQL.InputType("ShowUpdateWithoutActorsInput", {
  isAbstract: true
})
export class ShowUpdateWithoutActorsInput {
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
  thumbnail?: StringFieldUpdateOperationsInput | undefined;

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

  @TypeGraphQL.Field(_type => GenreUpdateManyWithoutShowsInput, {
    nullable: true
  })
  genres?: GenreUpdateManyWithoutShowsInput | undefined;

  @TypeGraphQL.Field(_type => PlatformUpdateManyWithoutShowsInput, {
    nullable: true
  })
  platforms?: PlatformUpdateManyWithoutShowsInput | undefined;

  @TypeGraphQL.Field(_type => SongInShowUpdateManyWithoutShowInput, {
    nullable: true
  })
  soundtrack?: SongInShowUpdateManyWithoutShowInput | undefined;

  @TypeGraphQL.Field(_type => WatchlistUpdateManyWithoutShowsInput, {
    nullable: true
  })
  watchlist?: WatchlistUpdateManyWithoutShowsInput | undefined;

  @TypeGraphQL.Field(_type => ShowReviewUpdateManyWithoutShowInput, {
    nullable: true
  })
  reviews?: ShowReviewUpdateManyWithoutShowInput | undefined;
}
