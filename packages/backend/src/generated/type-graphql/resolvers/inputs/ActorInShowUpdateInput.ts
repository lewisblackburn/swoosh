import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonUpdateOneRequiredWithoutShowsInput } from "../inputs/PersonUpdateOneRequiredWithoutShowsInput";
import { ShowUpdateOneRequiredWithoutActorsInput } from "../inputs/ShowUpdateOneRequiredWithoutActorsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ActorInShowUpdateInput", {
  isAbstract: true
})
export class ActorInShowUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  role?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ShowUpdateOneRequiredWithoutActorsInput, {
    nullable: true
  })
  show?: ShowUpdateOneRequiredWithoutActorsInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpdateOneRequiredWithoutShowsInput, {
    nullable: true
  })
  person?: PersonUpdateOneRequiredWithoutShowsInput | undefined;
}
