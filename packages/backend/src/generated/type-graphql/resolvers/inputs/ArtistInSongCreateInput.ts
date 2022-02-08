import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateNestedOneWithoutSongsInput } from "../inputs/PersonCreateNestedOneWithoutSongsInput";
import { SongCreateNestedOneWithoutArtistsInput } from "../inputs/SongCreateNestedOneWithoutArtistsInput";

@TypeGraphQL.InputType("ArtistInSongCreateInput", {
  isAbstract: true
})
export class ArtistInSongCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  stagename!: string;

  @TypeGraphQL.Field(_type => SongCreateNestedOneWithoutArtistsInput, {
    nullable: false
  })
  song!: SongCreateNestedOneWithoutArtistsInput;

  @TypeGraphQL.Field(_type => PersonCreateNestedOneWithoutSongsInput, {
    nullable: false
  })
  person!: PersonCreateNestedOneWithoutSongsInput;
}
