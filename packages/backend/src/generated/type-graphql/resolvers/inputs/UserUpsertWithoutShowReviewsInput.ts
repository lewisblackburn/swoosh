import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutShowReviewsInput } from "../inputs/UserCreateWithoutShowReviewsInput";
import { UserUpdateWithoutShowReviewsInput } from "../inputs/UserUpdateWithoutShowReviewsInput";

@TypeGraphQL.InputType("UserUpsertWithoutShowReviewsInput", {
  isAbstract: true
})
export class UserUpsertWithoutShowReviewsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutShowReviewsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutShowReviewsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutShowReviewsInput, {
    nullable: false
  })
  create!: UserCreateWithoutShowReviewsInput;
}
