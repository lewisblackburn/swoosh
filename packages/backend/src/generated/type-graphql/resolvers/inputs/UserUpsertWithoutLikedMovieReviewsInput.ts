import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutLikedMovieReviewsInput } from "../inputs/UserCreateWithoutLikedMovieReviewsInput";
import { UserUpdateWithoutLikedMovieReviewsInput } from "../inputs/UserUpdateWithoutLikedMovieReviewsInput";

@TypeGraphQL.InputType("UserUpsertWithoutLikedMovieReviewsInput", {
  isAbstract: true
})
export class UserUpsertWithoutLikedMovieReviewsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutLikedMovieReviewsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutLikedMovieReviewsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutLikedMovieReviewsInput, {
    nullable: false
  })
  create!: UserCreateWithoutLikedMovieReviewsInput;
}
