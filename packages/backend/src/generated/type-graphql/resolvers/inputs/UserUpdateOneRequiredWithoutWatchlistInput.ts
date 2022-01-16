import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutWatchlistInput } from "../inputs/UserCreateOrConnectWithoutWatchlistInput";
import { UserCreateWithoutWatchlistInput } from "../inputs/UserCreateWithoutWatchlistInput";
import { UserUpdateWithoutWatchlistInput } from "../inputs/UserUpdateWithoutWatchlistInput";
import { UserUpsertWithoutWatchlistInput } from "../inputs/UserUpsertWithoutWatchlistInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutWatchlistInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutWatchlistInput, {
    nullable: true
  })
  create?: UserCreateWithoutWatchlistInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutWatchlistInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutWatchlistInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutWatchlistInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutWatchlistInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutWatchlistInput, {
    nullable: true
  })
  update?: UserUpdateWithoutWatchlistInput | undefined;
}
