import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ShowUpdateOneRequiredWithoutReviewsInput } from "../inputs/ShowUpdateOneRequiredWithoutReviewsInput";
import { UserUpdateOneRequiredWithoutShowReviewsInput } from "../inputs/UserUpdateOneRequiredWithoutShowReviewsInput";

@TypeGraphQL.InputType("ShowReviewUpdateWithoutLikesInput", {
  isAbstract: true
})
export class ShowReviewUpdateWithoutLikesInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  review?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  rating?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutShowReviewsInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutShowReviewsInput | undefined;

  @TypeGraphQL.Field(_type => ShowUpdateOneRequiredWithoutReviewsInput, {
    nullable: true
  })
  show?: ShowUpdateOneRequiredWithoutReviewsInput | undefined;
}
