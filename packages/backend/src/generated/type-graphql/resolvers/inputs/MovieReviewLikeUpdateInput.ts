import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewUpdateOneRequiredWithoutLikesInput } from "../inputs/MovieReviewUpdateOneRequiredWithoutLikesInput";
import { UserUpdateOneRequiredWithoutLikedMovieReviewsInput } from "../inputs/UserUpdateOneRequiredWithoutLikedMovieReviewsInput";

@TypeGraphQL.InputType("MovieReviewLikeUpdateInput", {
  isAbstract: true
})
export class MovieReviewLikeUpdateInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutLikedMovieReviewsInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutLikedMovieReviewsInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewUpdateOneRequiredWithoutLikesInput, {
    nullable: true
  })
  movieReview?: MovieReviewUpdateOneRequiredWithoutLikesInput | undefined;
}
