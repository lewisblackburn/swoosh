import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutLikedBooksInput } from "../inputs/UserCreateWithoutLikedBooksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutLikedBooksInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutLikedBooksInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutLikedBooksInput, {
    nullable: false
  })
  create!: UserCreateWithoutLikedBooksInput;
}
