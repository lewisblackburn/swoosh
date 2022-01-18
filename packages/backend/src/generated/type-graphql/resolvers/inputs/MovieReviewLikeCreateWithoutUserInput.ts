import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewCreateNestedOneWithoutLikesInput } from "../inputs/MovieReviewCreateNestedOneWithoutLikesInput";

@TypeGraphQL.InputType("MovieReviewLikeCreateWithoutUserInput", {
  isAbstract: true
})
export class MovieReviewLikeCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => MovieReviewCreateNestedOneWithoutLikesInput, {
    nullable: false
  })
  movieReview!: MovieReviewCreateNestedOneWithoutLikesInput;
}
