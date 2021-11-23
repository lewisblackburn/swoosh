import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSongsInput } from "../inputs/UserCreateOrConnectWithoutSongsInput";
import { UserCreateWithoutSongsInput } from "../inputs/UserCreateWithoutSongsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutSongsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutSongsInput, {
    nullable: true
  })
  create?: UserCreateWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSongsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
