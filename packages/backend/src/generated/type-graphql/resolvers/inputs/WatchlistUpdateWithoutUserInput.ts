import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MovieUpdateManyWithoutWatchlistInput } from "../inputs/MovieUpdateManyWithoutWatchlistInput";
import { ShowUpdateManyWithoutWatchlistInput } from "../inputs/ShowUpdateManyWithoutWatchlistInput";

@TypeGraphQL.InputType("WatchlistUpdateWithoutUserInput", {
  isAbstract: true
})
export class WatchlistUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateManyWithoutWatchlistInput, {
    nullable: true
  })
  movies?: MovieUpdateManyWithoutWatchlistInput | undefined;

  @TypeGraphQL.Field(_type => ShowUpdateManyWithoutWatchlistInput, {
    nullable: true
  })
  shows?: ShowUpdateManyWithoutWatchlistInput | undefined;
}
