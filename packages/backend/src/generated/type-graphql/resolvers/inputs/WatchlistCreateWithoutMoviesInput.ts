import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateNestedManyWithoutWatchlistInput } from "../inputs/ShowCreateNestedManyWithoutWatchlistInput";
import { UserCreateNestedOneWithoutWatchlistInput } from "../inputs/UserCreateNestedOneWithoutWatchlistInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class WatchlistCreateWithoutMoviesInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutWatchlistInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutWatchlistInput;

  @TypeGraphQL.Field(_type => ShowCreateNestedManyWithoutWatchlistInput, {
    nullable: true
  })
  shows?: ShowCreateNestedManyWithoutWatchlistInput | undefined;
}
