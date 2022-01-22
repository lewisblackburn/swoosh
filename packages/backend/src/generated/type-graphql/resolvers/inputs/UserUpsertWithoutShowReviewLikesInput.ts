import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutShowReviewLikesInput } from "../inputs/UserCreateWithoutShowReviewLikesInput";
import { UserUpdateWithoutShowReviewLikesInput } from "../inputs/UserUpdateWithoutShowReviewLikesInput";

@TypeGraphQL.InputType("UserUpsertWithoutShowReviewLikesInput", {
  isAbstract: true
})
export class UserUpsertWithoutShowReviewLikesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutShowReviewLikesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutShowReviewLikesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutShowReviewLikesInput, {
    nullable: false
  })
  create!: UserCreateWithoutShowReviewLikesInput;
}
