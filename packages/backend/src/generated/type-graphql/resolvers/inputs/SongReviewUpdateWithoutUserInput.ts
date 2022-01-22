import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SongReviewLikeUpdateManyWithoutSongReviewInput } from "../inputs/SongReviewLikeUpdateManyWithoutSongReviewInput";
import { SongUpdateOneRequiredWithoutReviewsInput } from "../inputs/SongUpdateOneRequiredWithoutReviewsInput";

@TypeGraphQL.InputType("SongReviewUpdateWithoutUserInput", {
  isAbstract: true
})
export class SongReviewUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  review?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  rating?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SongReviewLikeUpdateManyWithoutSongReviewInput, {
    nullable: true
  })
  likes?: SongReviewLikeUpdateManyWithoutSongReviewInput | undefined;

  @TypeGraphQL.Field(_type => SongUpdateOneRequiredWithoutReviewsInput, {
    nullable: true
  })
  song?: SongUpdateOneRequiredWithoutReviewsInput | undefined;
}
