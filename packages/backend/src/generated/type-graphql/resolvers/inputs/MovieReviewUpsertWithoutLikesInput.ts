import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewCreateWithoutLikesInput } from "../inputs/MovieReviewCreateWithoutLikesInput";
import { MovieReviewUpdateWithoutLikesInput } from "../inputs/MovieReviewUpdateWithoutLikesInput";

@TypeGraphQL.InputType("MovieReviewUpsertWithoutLikesInput", {
  isAbstract: true
})
export class MovieReviewUpsertWithoutLikesInput {
  @TypeGraphQL.Field(_type => MovieReviewUpdateWithoutLikesInput, {
    nullable: false
  })
  update!: MovieReviewUpdateWithoutLikesInput;

  @TypeGraphQL.Field(_type => MovieReviewCreateWithoutLikesInput, {
    nullable: false
  })
  create!: MovieReviewCreateWithoutLikesInput;
}
