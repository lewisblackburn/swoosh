import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedManyWithoutWatchlistInput } from "../inputs/MovieCreateNestedManyWithoutWatchlistInput";
import { ShowCreateNestedManyWithoutWatchlistInput } from "../inputs/ShowCreateNestedManyWithoutWatchlistInput";
import { UserCreateNestedOneWithoutWatchlistInput } from "../inputs/UserCreateNestedOneWithoutWatchlistInput";

@TypeGraphQL.InputType("WatchlistCreateInput", {
  isAbstract: true
})
export class WatchlistCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutWatchlistInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutWatchlistInput;

  @TypeGraphQL.Field(_type => MovieCreateNestedManyWithoutWatchlistInput, {
    nullable: true
  })
  movies?: MovieCreateNestedManyWithoutWatchlistInput | undefined;

  @TypeGraphQL.Field(_type => ShowCreateNestedManyWithoutWatchlistInput, {
    nullable: true
  })
  shows?: ShowCreateNestedManyWithoutWatchlistInput | undefined;
}
