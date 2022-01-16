import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowUpdateManyWithoutWatchlistInput } from "../inputs/ShowUpdateManyWithoutWatchlistInput";
import { UserUpdateOneRequiredWithoutWatchlistInput } from "../inputs/UserUpdateOneRequiredWithoutWatchlistInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class WatchlistUpdateWithoutMoviesInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutWatchlistInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutWatchlistInput | undefined;

  @TypeGraphQL.Field(_type => ShowUpdateManyWithoutWatchlistInput, {
    nullable: true
  })
  shows?: ShowUpdateManyWithoutWatchlistInput | undefined;
}
