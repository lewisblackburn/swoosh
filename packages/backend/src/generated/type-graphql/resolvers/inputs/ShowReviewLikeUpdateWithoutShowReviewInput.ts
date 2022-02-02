import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutShowReviewLikesInput } from "../inputs/UserUpdateOneRequiredWithoutShowReviewLikesInput";

@TypeGraphQL.InputType("ShowReviewLikeUpdateWithoutShowReviewInput", {
  isAbstract: true
})
export class ShowReviewLikeUpdateWithoutShowReviewInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutShowReviewLikesInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutShowReviewLikesInput | undefined;
}
