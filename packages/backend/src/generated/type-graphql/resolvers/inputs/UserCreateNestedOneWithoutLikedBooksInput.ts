import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutLikedBooksInput } from "../inputs/UserCreateOrConnectWithoutLikedBooksInput";
import { UserCreateWithoutLikedBooksInput } from "../inputs/UserCreateWithoutLikedBooksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutLikedBooksInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutLikedBooksInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutLikedBooksInput, {
    nullable: true
  })
  create?: UserCreateWithoutLikedBooksInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutLikedBooksInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutLikedBooksInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
