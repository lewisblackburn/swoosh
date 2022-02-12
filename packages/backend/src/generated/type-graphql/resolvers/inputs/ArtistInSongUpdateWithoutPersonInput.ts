import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { SongUpdateOneRequiredWithoutArtistsInput } from "../inputs/SongUpdateOneRequiredWithoutArtistsInput";

@TypeGraphQL.InputType("ArtistInSongUpdateWithoutPersonInput", {
  isAbstract: true
})
export class ArtistInSongUpdateWithoutPersonInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SongUpdateOneRequiredWithoutArtistsInput, {
    nullable: true
  })
  song?: SongUpdateOneRequiredWithoutArtistsInput | undefined;
}
