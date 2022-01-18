import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ShowUpdateOneRequiredWithoutSoundtrackInput } from "../inputs/ShowUpdateOneRequiredWithoutSoundtrackInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("SongInShowUpdateWithoutSongInput", {
  isAbstract: true
})
export class SongInShowUpdateWithoutSongInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  timestamp?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ShowUpdateOneRequiredWithoutSoundtrackInput, {
    nullable: true
  })
  show?: ShowUpdateOneRequiredWithoutSoundtrackInput | undefined;
}
