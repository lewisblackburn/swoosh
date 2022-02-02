import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MovieUpdateOneRequiredWithoutReviewsInput } from "../inputs/MovieUpdateOneRequiredWithoutReviewsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutMovieReviewsInput } from "../inputs/UserUpdateOneRequiredWithoutMovieReviewsInput";

@TypeGraphQL.InputType("MovieReviewUpdateWithoutLikesInput", {
  isAbstract: true
})
export class MovieReviewUpdateWithoutLikesInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  review?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  rating?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutMovieReviewsInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutMovieReviewsInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateOneRequiredWithoutReviewsInput, {
    nullable: true
  })
  movie?: MovieUpdateOneRequiredWithoutReviewsInput | undefined;
}
