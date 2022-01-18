import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedManyWithoutWatchlistInput } from "../inputs/MovieCreateNestedManyWithoutWatchlistInput";
import { ShowCreateNestedManyWithoutWatchlistInput } from "../inputs/ShowCreateNestedManyWithoutWatchlistInput";

@TypeGraphQL.InputType("WatchlistCreateWithoutUserInput", {
  isAbstract: true
})
export class WatchlistCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => MovieCreateNestedManyWithoutWatchlistInput, {
    nullable: true
  })
  movies?: MovieCreateNestedManyWithoutWatchlistInput | undefined;

  @TypeGraphQL.Field(_type => ShowCreateNestedManyWithoutWatchlistInput, {
    nullable: true
  })
  shows?: ShowCreateNestedManyWithoutWatchlistInput | undefined;
}
