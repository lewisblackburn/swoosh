import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewUpdateOneRequiredWithoutLikesInput } from "../inputs/MovieReviewUpdateOneRequiredWithoutLikesInput";

@TypeGraphQL.InputType("MovieReviewLikeUpdateWithoutUserInput", {
  isAbstract: true
})
export class MovieReviewLikeUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => MovieReviewUpdateOneRequiredWithoutLikesInput, {
    nullable: true
  })
  movieReview?: MovieReviewUpdateOneRequiredWithoutLikesInput | undefined;
}
