import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongUpdateOneRequiredWithoutArtistsInput } from "../inputs/SongUpdateOneRequiredWithoutArtistsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ArtistInSongUpdateWithoutPersonInput", {
  isAbstract: true
})
export class ArtistInSongUpdateWithoutPersonInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  penname?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SongUpdateOneRequiredWithoutArtistsInput, {
    nullable: true
  })
  song?: SongUpdateOneRequiredWithoutArtistsInput | undefined;
}
