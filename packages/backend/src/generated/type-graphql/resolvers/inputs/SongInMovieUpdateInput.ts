import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MovieUpdateOneRequiredWithoutSoundtrackInput } from "../inputs/MovieUpdateOneRequiredWithoutSoundtrackInput";
import { SongUpdateOneRequiredWithoutSongInMovieInput } from "../inputs/SongUpdateOneRequiredWithoutSongInMovieInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("SongInMovieUpdateInput", {
  isAbstract: true
})
export class SongInMovieUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  timestamp?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SongUpdateOneRequiredWithoutSongInMovieInput, {
    nullable: true
  })
  song?: SongUpdateOneRequiredWithoutSongInMovieInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateOneRequiredWithoutSoundtrackInput, {
    nullable: true
  })
  movie?: MovieUpdateOneRequiredWithoutSoundtrackInput | undefined;
}
