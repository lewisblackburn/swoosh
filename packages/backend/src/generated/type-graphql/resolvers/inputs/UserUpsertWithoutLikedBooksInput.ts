import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutLikedBooksInput } from "../inputs/UserCreateWithoutLikedBooksInput";
import { UserUpdateWithoutLikedBooksInput } from "../inputs/UserUpdateWithoutLikedBooksInput";

@TypeGraphQL.InputType("UserUpsertWithoutLikedBooksInput", {
  isAbstract: true
})
export class UserUpsertWithoutLikedBooksInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutLikedBooksInput, {
    nullable: false
  })
  update!: UserUpdateWithoutLikedBooksInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutLikedBooksInput, {
    nullable: false
  })
  create!: UserCreateWithoutLikedBooksInput;
}
