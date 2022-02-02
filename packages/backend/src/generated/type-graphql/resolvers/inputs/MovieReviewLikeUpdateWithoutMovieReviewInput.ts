import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutLikedMovieReviewsInput } from "../inputs/UserUpdateOneRequiredWithoutLikedMovieReviewsInput";

@TypeGraphQL.InputType("MovieReviewLikeUpdateWithoutMovieReviewInput", {
  isAbstract: true
})
export class MovieReviewLikeUpdateWithoutMovieReviewInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutLikedMovieReviewsInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutLikedMovieReviewsInput | undefined;
}
