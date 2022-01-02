import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformUpdateOneRequiredWithoutPlatformOnShowInput } from "../inputs/PlatformUpdateOneRequiredWithoutPlatformOnShowInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnShowUpdateWithoutShowInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  price?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PlatformUpdateOneRequiredWithoutPlatformOnShowInput, {
    nullable: true
  })
  platform?: PlatformUpdateOneRequiredWithoutPlatformOnShowInput | undefined;
}
