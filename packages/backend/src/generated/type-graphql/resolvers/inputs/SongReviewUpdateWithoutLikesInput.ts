import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SongUpdateOneRequiredWithoutReviewsInput } from "../inputs/SongUpdateOneRequiredWithoutReviewsInput";
import { UserUpdateOneRequiredWithoutSongReviewsInput } from "../inputs/UserUpdateOneRequiredWithoutSongReviewsInput";

@TypeGraphQL.InputType("SongReviewUpdateWithoutLikesInput", {
  isAbstract: true
})
export class SongReviewUpdateWithoutLikesInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  review?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  rating?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutSongReviewsInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutSongReviewsInput | undefined;

  @TypeGraphQL.Field(_type => SongUpdateOneRequiredWithoutReviewsInput, {
    nullable: true
  })
  song?: SongUpdateOneRequiredWithoutReviewsInput | undefined;
}
