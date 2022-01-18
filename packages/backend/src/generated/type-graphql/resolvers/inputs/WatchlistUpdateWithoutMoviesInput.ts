import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ShowUpdateManyWithoutWatchlistInput } from "../inputs/ShowUpdateManyWithoutWatchlistInput";
import { UserUpdateOneRequiredWithoutWatchlistInput } from "../inputs/UserUpdateOneRequiredWithoutWatchlistInput";

@TypeGraphQL.InputType("WatchlistUpdateWithoutMoviesInput", {
  isAbstract: true
})
export class WatchlistUpdateWithoutMoviesInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutWatchlistInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutWatchlistInput | undefined;

  @TypeGraphQL.Field(_type => ShowUpdateManyWithoutWatchlistInput, {
    nullable: true
  })
  shows?: ShowUpdateManyWithoutWatchlistInput | undefined;
}
