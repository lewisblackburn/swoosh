import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ShowUpdateOneRequiredWithoutLikesInput } from "../inputs/ShowUpdateOneRequiredWithoutLikesInput";
import { UserUpdateOneRequiredWithoutLikedShowsInput } from "../inputs/UserUpdateOneRequiredWithoutLikedShowsInput";

@TypeGraphQL.InputType("ShowLikeUpdateInput", {
  isAbstract: true
})
export class ShowLikeUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutLikedShowsInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutLikedShowsInput | undefined;

  @TypeGraphQL.Field(_type => ShowUpdateOneRequiredWithoutLikesInput, {
    nullable: true
  })
  show?: ShowUpdateOneRequiredWithoutLikesInput | undefined;
}
