import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInMovieUpdateManyWithoutPersonInput } from "../inputs/ActorInMovieUpdateManyWithoutPersonInput";
import { PersonUpdatecareerInput } from "../inputs/PersonUpdatecareerInput";
import { SongUpdateManyWithoutArtistsInput } from "../inputs/SongUpdateManyWithoutArtistsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonUpdateWithoutBooksInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpdatecareerInput, {
    nullable: true
  })
  career?: PersonUpdatecareerInput | undefined;

  @TypeGraphQL.Field(_type => ActorInMovieUpdateManyWithoutPersonInput, {
    nullable: true
  })
  movies?: ActorInMovieUpdateManyWithoutPersonInput | undefined;

  @TypeGraphQL.Field(_type => SongUpdateManyWithoutArtistsInput, {
    nullable: true
  })
  songs?: SongUpdateManyWithoutArtistsInput | undefined;
}
