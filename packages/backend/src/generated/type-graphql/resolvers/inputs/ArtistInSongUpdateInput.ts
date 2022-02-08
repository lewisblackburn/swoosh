import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonUpdateOneRequiredWithoutSongsInput } from "../inputs/PersonUpdateOneRequiredWithoutSongsInput";
import { SongUpdateOneRequiredWithoutArtistsInput } from "../inputs/SongUpdateOneRequiredWithoutArtistsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ArtistInSongUpdateInput", {
  isAbstract: true
})
export class ArtistInSongUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  stagename?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SongUpdateOneRequiredWithoutArtistsInput, {
    nullable: true
  })
  song?: SongUpdateOneRequiredWithoutArtistsInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpdateOneRequiredWithoutSongsInput, {
    nullable: true
  })
  person?: PersonUpdateOneRequiredWithoutSongsInput | undefined;
}
