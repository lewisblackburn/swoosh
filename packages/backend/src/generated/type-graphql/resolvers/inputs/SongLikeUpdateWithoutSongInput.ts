import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutLikedSongsInput } from "../inputs/UserUpdateOneRequiredWithoutLikedSongsInput";

@TypeGraphQL.InputType("SongLikeUpdateWithoutSongInput", {
  isAbstract: true
})
export class SongLikeUpdateWithoutSongInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutLikedSongsInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutLikedSongsInput | undefined;
}
