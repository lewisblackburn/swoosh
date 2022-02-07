import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInMovieUpdateManyWithoutPersonInput } from "../inputs/ActorInMovieUpdateManyWithoutPersonInput";
import { ArtistInSongUpdateManyWithoutPersonInput } from "../inputs/ArtistInSongUpdateManyWithoutPersonInput";
import { AuthorInBookUpdateManyWithoutPersonInput } from "../inputs/AuthorInBookUpdateManyWithoutPersonInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PersonUpdatecareerInput } from "../inputs/PersonUpdatecareerInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PersonUpdateWithoutShowsInput", {
  isAbstract: true
})
export class PersonUpdateWithoutShowsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  poster?: StringFieldUpdateOperationsInput | undefined;

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

  @TypeGraphQL.Field(_type => ActorInMovieUpdateManyWithoutPersonInput, {
    nullable: true
  })
  movies?: ActorInMovieUpdateManyWithoutPersonInput | undefined;

  @TypeGraphQL.Field(_type => AuthorInBookUpdateManyWithoutPersonInput, {
    nullable: true
  })
  books?: AuthorInBookUpdateManyWithoutPersonInput | undefined;

  @TypeGraphQL.Field(_type => ArtistInSongUpdateManyWithoutPersonInput, {
    nullable: true
  })
  songs?: ArtistInSongUpdateManyWithoutPersonInput | undefined;
}
