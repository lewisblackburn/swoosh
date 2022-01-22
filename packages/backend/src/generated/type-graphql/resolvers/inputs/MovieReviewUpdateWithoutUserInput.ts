import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MovieReviewLikeUpdateManyWithoutMovieReviewInput } from "../inputs/MovieReviewLikeUpdateManyWithoutMovieReviewInput";
import { MovieUpdateOneRequiredWithoutReviewsInput } from "../inputs/MovieUpdateOneRequiredWithoutReviewsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MovieReviewUpdateWithoutUserInput", {
  isAbstract: true
})
export class MovieReviewUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  review?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  rating?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikeUpdateManyWithoutMovieReviewInput, {
    nullable: true
  })
  likes?: MovieReviewLikeUpdateManyWithoutMovieReviewInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateOneRequiredWithoutReviewsInput, {
    nullable: true
  })
  movie?: MovieUpdateOneRequiredWithoutReviewsInput | undefined;
}
