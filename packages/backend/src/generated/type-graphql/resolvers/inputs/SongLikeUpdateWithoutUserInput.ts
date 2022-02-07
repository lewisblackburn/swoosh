import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { SongUpdateOneRequiredWithoutLikesInput } from "../inputs/SongUpdateOneRequiredWithoutLikesInput";

@TypeGraphQL.InputType("SongLikeUpdateWithoutUserInput", {
  isAbstract: true
})
export class SongLikeUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SongUpdateOneRequiredWithoutLikesInput, {
    nullable: true
  })
  song?: SongUpdateOneRequiredWithoutLikesInput | undefined;
}
