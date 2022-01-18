import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MovieUpdateOneWithoutReviewInput } from "../inputs/MovieUpdateOneWithoutReviewInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutMovieReviewsInput } from "../inputs/UserUpdateOneWithoutMovieReviewsInput";

@TypeGraphQL.InputType("MovieReviewUpdateWithoutLikesInput", {
  isAbstract: true
})
export class MovieReviewUpdateWithoutLikesInput {
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

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutMovieReviewsInput, {
    nullable: true
  })
  User?: UserUpdateOneWithoutMovieReviewsInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateOneWithoutReviewInput, {
    nullable: true
  })
  Movie?: MovieUpdateOneWithoutReviewInput | undefined;
}
