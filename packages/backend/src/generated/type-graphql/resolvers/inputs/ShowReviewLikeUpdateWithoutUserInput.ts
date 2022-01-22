import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ShowReviewUpdateOneRequiredWithoutLikesInput } from "../inputs/ShowReviewUpdateOneRequiredWithoutLikesInput";

@TypeGraphQL.InputType("ShowReviewLikeUpdateWithoutUserInput", {
  isAbstract: true
})
export class ShowReviewLikeUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ShowReviewUpdateOneRequiredWithoutLikesInput, {
    nullable: true
  })
  showReview?: ShowReviewUpdateOneRequiredWithoutLikesInput | undefined;
}
