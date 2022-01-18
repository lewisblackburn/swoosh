import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieUpdateManyWithoutPlatformsInput } from "../inputs/MovieUpdateManyWithoutPlatformsInput";
import { ShowUpdateManyWithoutPlatformsInput } from "../inputs/ShowUpdateManyWithoutPlatformsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PlatformUpdateInput", {
  isAbstract: true
})
export class PlatformUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  apiKey?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ShowUpdateManyWithoutPlatformsInput, {
    nullable: true
  })
  shows?: ShowUpdateManyWithoutPlatformsInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateManyWithoutPlatformsInput, {
    nullable: true
  })
  movies?: MovieUpdateManyWithoutPlatformsInput | undefined;
}
