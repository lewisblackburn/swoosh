import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInShowUpdateManyWithoutPersonInput } from "../inputs/ActorInShowUpdateManyWithoutPersonInput";
import { ArtistInSongUpdateManyWithoutPersonInput } from "../inputs/ArtistInSongUpdateManyWithoutPersonInput";
import { AuthorInBookUpdateManyWithoutPersonInput } from "../inputs/AuthorInBookUpdateManyWithoutPersonInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PersonUpdatecareerInput } from "../inputs/PersonUpdatecareerInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PersonUpdateWithoutMoviesInput", {
  isAbstract: true
})
export class PersonUpdateWithoutMoviesInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  poster?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  locked?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  bio?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  age?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpdatecareerInput, {
    nullable: true
  })
  career?: PersonUpdatecareerInput | undefined;

  @TypeGraphQL.Field(_type => ActorInShowUpdateManyWithoutPersonInput, {
    nullable: true
  })
  shows?: ActorInShowUpdateManyWithoutPersonInput | undefined;

  @TypeGraphQL.Field(_type => AuthorInBookUpdateManyWithoutPersonInput, {
    nullable: true
  })
  books?: AuthorInBookUpdateManyWithoutPersonInput | undefined;

  @TypeGraphQL.Field(_type => ArtistInSongUpdateManyWithoutPersonInput, {
    nullable: true
  })
  songs?: ArtistInSongUpdateManyWithoutPersonInput | undefined;
}
