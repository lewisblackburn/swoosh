import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { SongReviewUpdateOneRequiredWithoutLikesInput } from "../inputs/SongReviewUpdateOneRequiredWithoutLikesInput";

@TypeGraphQL.InputType("SongReviewLikeUpdateWithoutUserInput", {
  isAbstract: true
})
export class SongReviewLikeUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SongReviewUpdateOneRequiredWithoutLikesInput, {
    nullable: true
  })
  songReview?: SongReviewUpdateOneRequiredWithoutLikesInput | undefined;
}
