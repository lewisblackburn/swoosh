import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ShowReviewUpdateOneRequiredWithoutLikesInput } from "../inputs/ShowReviewUpdateOneRequiredWithoutLikesInput";
import { UserUpdateOneRequiredWithoutShowReviewLikesInput } from "../inputs/UserUpdateOneRequiredWithoutShowReviewLikesInput";

@TypeGraphQL.InputType("ShowReviewLikeUpdateInput", {
  isAbstract: true
})
export class ShowReviewLikeUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutShowReviewLikesInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutShowReviewLikesInput | undefined;

  @TypeGraphQL.Field(_type => ShowReviewUpdateOneRequiredWithoutLikesInput, {
    nullable: true
  })
  showReview?: ShowReviewUpdateOneRequiredWithoutLikesInput | undefined;
}
