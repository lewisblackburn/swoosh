import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedManyWithoutWatchlistInput } from "../inputs/MovieCreateNestedManyWithoutWatchlistInput";
import { UserCreateNestedOneWithoutWatchlistInput } from "../inputs/UserCreateNestedOneWithoutWatchlistInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class WatchlistCreateWithoutShowsInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutWatchlistInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutWatchlistInput;

  @TypeGraphQL.Field(_type => MovieCreateNestedManyWithoutWatchlistInput, {
    nullable: true
  })
  movies?: MovieCreateNestedManyWithoutWatchlistInput | undefined;
}
