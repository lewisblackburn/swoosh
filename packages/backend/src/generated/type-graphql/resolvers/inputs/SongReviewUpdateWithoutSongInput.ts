import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SongReviewLikeUpdateManyWithoutSongReviewInput } from "../inputs/SongReviewLikeUpdateManyWithoutSongReviewInput";
import { UserUpdateOneRequiredWithoutSongReviewsInput } from "../inputs/UserUpdateOneRequiredWithoutSongReviewsInput";

@TypeGraphQL.InputType("SongReviewUpdateWithoutSongInput", {
  isAbstract: true
})
export class SongReviewUpdateWithoutSongInput {
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

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutSongReviewsInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutSongReviewsInput | undefined;
}
