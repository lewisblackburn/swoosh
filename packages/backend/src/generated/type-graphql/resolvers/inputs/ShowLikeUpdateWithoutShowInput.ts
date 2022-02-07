import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutLikedShowsInput } from "../inputs/UserUpdateOneRequiredWithoutLikedShowsInput";

@TypeGraphQL.InputType("ShowLikeUpdateWithoutShowInput", {
  isAbstract: true
})
export class ShowLikeUpdateWithoutShowInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutLikedShowsInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutLikedShowsInput | undefined;
}
