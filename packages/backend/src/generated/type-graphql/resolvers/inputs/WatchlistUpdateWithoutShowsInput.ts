import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MovieUpdateManyWithoutWatchlistInput } from "../inputs/MovieUpdateManyWithoutWatchlistInput";
import { UserUpdateOneRequiredWithoutWatchlistInput } from "../inputs/UserUpdateOneRequiredWithoutWatchlistInput";

@TypeGraphQL.InputType("WatchlistUpdateWithoutShowsInput", {
  isAbstract: true
})
export class WatchlistUpdateWithoutShowsInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutWatchlistInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutWatchlistInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateManyWithoutWatchlistInput, {
    nullable: true
  })
  movies?: MovieUpdateManyWithoutWatchlistInput | undefined;
}
