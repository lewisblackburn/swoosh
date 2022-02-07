import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutLikedSongsInput } from "../inputs/UserCreateOrConnectWithoutLikedSongsInput";
import { UserCreateWithoutLikedSongsInput } from "../inputs/UserCreateWithoutLikedSongsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutLikedSongsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutLikedSongsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutLikedSongsInput, {
    nullable: true
  })
  create?: UserCreateWithoutLikedSongsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutLikedSongsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutLikedSongsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
