import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutBookReviewLikesInput } from "../inputs/UserCreateWithoutBookReviewLikesInput";
import { UserUpdateWithoutBookReviewLikesInput } from "../inputs/UserUpdateWithoutBookReviewLikesInput";

@TypeGraphQL.InputType("UserUpsertWithoutBookReviewLikesInput", {
  isAbstract: true
})
export class UserUpsertWithoutBookReviewLikesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutBookReviewLikesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutBookReviewLikesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutBookReviewLikesInput, {
    nullable: false
  })
  create!: UserCreateWithoutBookReviewLikesInput;
}
