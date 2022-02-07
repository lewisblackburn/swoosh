import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ShowUpdateOneRequiredWithoutLikesInput } from "../inputs/ShowUpdateOneRequiredWithoutLikesInput";

@TypeGraphQL.InputType("ShowLikeUpdateWithoutUserInput", {
  isAbstract: true
})
export class ShowLikeUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ShowUpdateOneRequiredWithoutLikesInput, {
    nullable: true
  })
  show?: ShowUpdateOneRequiredWithoutLikesInput | undefined;
}
