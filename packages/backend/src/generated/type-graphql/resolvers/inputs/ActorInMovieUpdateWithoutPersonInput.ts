import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieUpdateOneRequiredWithoutActorsInput } from "../inputs/MovieUpdateOneRequiredWithoutActorsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ActorInMovieUpdateWithoutPersonInput", {
  isAbstract: true
})
export class ActorInMovieUpdateWithoutPersonInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  role?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateOneRequiredWithoutActorsInput, {
    nullable: true
  })
  movie?: MovieUpdateOneRequiredWithoutActorsInput | undefined;
}
