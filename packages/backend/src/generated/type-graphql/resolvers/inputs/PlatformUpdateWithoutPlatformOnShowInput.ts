import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformOnMovieUpdateManyWithoutPlatformInput } from "../inputs/PlatformOnMovieUpdateManyWithoutPlatformInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformUpdateWithoutPlatformOnShowInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PlatformOnMovieUpdateManyWithoutPlatformInput, {
    nullable: true
  })
  PlatformOnMovie?: PlatformOnMovieUpdateManyWithoutPlatformInput | undefined;
}
