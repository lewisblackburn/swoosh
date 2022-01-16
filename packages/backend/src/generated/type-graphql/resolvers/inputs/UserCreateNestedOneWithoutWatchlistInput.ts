import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutWatchlistInput } from "../inputs/UserCreateOrConnectWithoutWatchlistInput";
import { UserCreateWithoutWatchlistInput } from "../inputs/UserCreateWithoutWatchlistInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutWatchlistInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutWatchlistInput, {
    nullable: true
  })
  create?: UserCreateWithoutWatchlistInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutWatchlistInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutWatchlistInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
