import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInMovieCreateNestedManyWithoutPersonInput } from "../inputs/ActorInMovieCreateNestedManyWithoutPersonInput";
import { PersonCreatecareerInput } from "../inputs/PersonCreatecareerInput";
import { SongCreateNestedManyWithoutArtistsInput } from "../inputs/SongCreateNestedManyWithoutArtistsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonCreateWithoutBooksInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => PersonCreatecareerInput, {
    nullable: true
  })
  career?: PersonCreatecareerInput | undefined;

  @TypeGraphQL.Field(_type => ActorInMovieCreateNestedManyWithoutPersonInput, {
    nullable: true
  })
  movies?: ActorInMovieCreateNestedManyWithoutPersonInput | undefined;

  @TypeGraphQL.Field(_type => SongCreateNestedManyWithoutArtistsInput, {
    nullable: true
  })
  songs?: SongCreateNestedManyWithoutArtistsInput | undefined;
}
