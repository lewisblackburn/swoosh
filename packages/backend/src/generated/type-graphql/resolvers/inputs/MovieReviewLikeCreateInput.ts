import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewCreateNestedOneWithoutLikesInput } from "../inputs/MovieReviewCreateNestedOneWithoutLikesInput";
import { UserCreateNestedOneWithoutLikedMovieReviewsInput } from "../inputs/UserCreateNestedOneWithoutLikedMovieReviewsInput";

@TypeGraphQL.InputType("MovieReviewLikeCreateInput", {
  isAbstract: true
})
export class MovieReviewLikeCreateInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutLikedMovieReviewsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutLikedMovieReviewsInput;

  @TypeGraphQL.Field(_type => MovieReviewCreateNestedOneWithoutLikesInput, {
    nullable: false
  })
  movieReview!: MovieReviewCreateNestedOneWithoutLikesInput;
}
