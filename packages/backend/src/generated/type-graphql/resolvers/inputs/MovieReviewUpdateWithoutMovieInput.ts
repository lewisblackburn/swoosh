import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MovieReviewLikeUpdateManyWithoutMovieReviewInput } from "../inputs/MovieReviewLikeUpdateManyWithoutMovieReviewInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutMovieReviewsInput } from "../inputs/UserUpdateOneRequiredWithoutMovieReviewsInput";

@TypeGraphQL.InputType("MovieReviewUpdateWithoutMovieInput", {
  isAbstract: true
})
export class MovieReviewUpdateWithoutMovieInput {
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

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutMovieReviewsInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutMovieReviewsInput | undefined;
}
