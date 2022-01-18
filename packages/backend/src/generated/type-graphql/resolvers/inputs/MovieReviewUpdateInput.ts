import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MovieReviewLikeUpdateManyWithoutMovieReviewInput } from "../inputs/MovieReviewLikeUpdateManyWithoutMovieReviewInput";
import { MovieUpdateOneWithoutReviewInput } from "../inputs/MovieUpdateOneWithoutReviewInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutMovieReviewsInput } from "../inputs/UserUpdateOneWithoutMovieReviewsInput";

@TypeGraphQL.InputType("MovieReviewUpdateInput", {
  isAbstract: true
})
export class MovieReviewUpdateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: NullableStringFieldUpdateOperationsInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutMovieReviewsInput, {
    nullable: true
  })
  User?: UserUpdateOneWithoutMovieReviewsInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateOneWithoutReviewInput, {
    nullable: true
  })
  Movie?: MovieUpdateOneWithoutReviewInput | undefined;
}
