import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { SongReviewUpdateOneRequiredWithoutLikesInput } from "../inputs/SongReviewUpdateOneRequiredWithoutLikesInput";
import { UserUpdateOneRequiredWithoutSongReviewLikesInput } from "../inputs/UserUpdateOneRequiredWithoutSongReviewLikesInput";

@TypeGraphQL.InputType("SongReviewLikeUpdateInput", {
  isAbstract: true
})
export class SongReviewLikeUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutSongReviewLikesInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutSongReviewLikesInput | undefined;

  @TypeGraphQL.Field(_type => SongReviewUpdateOneRequiredWithoutLikesInput, {
    nullable: true
  })
  songReview?: SongReviewUpdateOneRequiredWithoutLikesInput | undefined;
}
