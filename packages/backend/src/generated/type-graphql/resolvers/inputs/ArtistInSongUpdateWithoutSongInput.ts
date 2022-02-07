import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonUpdateOneRequiredWithoutSongsInput } from "../inputs/PersonUpdateOneRequiredWithoutSongsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ArtistInSongUpdateWithoutSongInput", {
  isAbstract: true
})
export class ArtistInSongUpdateWithoutSongInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  penname?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpdateOneRequiredWithoutSongsInput, {
    nullable: true
  })
  person?: PersonUpdateOneRequiredWithoutSongsInput | undefined;
}
