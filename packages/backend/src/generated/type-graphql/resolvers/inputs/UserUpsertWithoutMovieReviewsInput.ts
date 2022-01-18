import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutMovieReviewsInput } from "../inputs/UserCreateWithoutMovieReviewsInput";
import { UserUpdateWithoutMovieReviewsInput } from "../inputs/UserUpdateWithoutMovieReviewsInput";

@TypeGraphQL.InputType("UserUpsertWithoutMovieReviewsInput", {
  isAbstract: true
})
export class UserUpsertWithoutMovieReviewsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutMovieReviewsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutMovieReviewsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutMovieReviewsInput, {
    nullable: false
  })
  create!: UserCreateWithoutMovieReviewsInput;
}
