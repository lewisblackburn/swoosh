import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PersonUpdateOneRequiredWithoutSongsInput } from "../inputs/PersonUpdateOneRequiredWithoutSongsInput";

@TypeGraphQL.InputType("ArtistInSongUpdateWithoutSongInput", {
  isAbstract: true
})
export class ArtistInSongUpdateWithoutSongInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpdateOneRequiredWithoutSongsInput, {
    nullable: true
  })
  person?: PersonUpdateOneRequiredWithoutSongsInput | undefined;
}
