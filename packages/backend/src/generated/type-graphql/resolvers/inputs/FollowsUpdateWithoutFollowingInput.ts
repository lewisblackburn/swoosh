import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutFollowersInput } from "../inputs/UserUpdateOneRequiredWithoutFollowersInput";

@TypeGraphQL.InputType("FollowsUpdateWithoutFollowingInput", {
  isAbstract: true
})
export class FollowsUpdateWithoutFollowingInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutFollowersInput, {
    nullable: true
  })
  follower?: UserUpdateOneRequiredWithoutFollowersInput | undefined;
}
