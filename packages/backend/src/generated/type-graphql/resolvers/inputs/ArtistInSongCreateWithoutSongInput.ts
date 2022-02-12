import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateNestedOneWithoutSongsInput } from "../inputs/PersonCreateNestedOneWithoutSongsInput";

@TypeGraphQL.InputType("ArtistInSongCreateWithoutSongInput", {
  isAbstract: true
})
export class ArtistInSongCreateWithoutSongInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => PersonCreateNestedOneWithoutSongsInput, {
    nullable: false
  })
  person!: PersonCreateNestedOneWithoutSongsInput;
}
