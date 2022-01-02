import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformUpdateOneRequiredWithoutPlatformOnMovieInput } from "../inputs/PlatformUpdateOneRequiredWithoutPlatformOnMovieInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnMovieUpdateWithoutMovieInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  price?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PlatformUpdateOneRequiredWithoutPlatformOnMovieInput, {
    nullable: true
  })
  platform?: PlatformUpdateOneRequiredWithoutPlatformOnMovieInput | undefined;
}
