import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutWatchlistInput } from "../inputs/UserCreateWithoutWatchlistInput";
import { UserUpdateWithoutWatchlistInput } from "../inputs/UserUpdateWithoutWatchlistInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutWatchlistInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutWatchlistInput, {
    nullable: false
  })
  update!: UserUpdateWithoutWatchlistInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutWatchlistInput, {
    nullable: false
  })
  create!: UserCreateWithoutWatchlistInput;
}
