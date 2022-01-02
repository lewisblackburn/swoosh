import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieUpdateOneRequiredWithoutPlatformsInput } from "../inputs/MovieUpdateOneRequiredWithoutPlatformsInput";
import { PlatformUpdateOneRequiredWithoutPlatformOnMovieInput } from "../inputs/PlatformUpdateOneRequiredWithoutPlatformOnMovieInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnMovieUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  price?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PlatformUpdateOneRequiredWithoutPlatformOnMovieInput, {
    nullable: true
  })
  platform?: PlatformUpdateOneRequiredWithoutPlatformOnMovieInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateOneRequiredWithoutPlatformsInput, {
    nullable: true
  })
  movie?: MovieUpdateOneRequiredWithoutPlatformsInput | undefined;
}
