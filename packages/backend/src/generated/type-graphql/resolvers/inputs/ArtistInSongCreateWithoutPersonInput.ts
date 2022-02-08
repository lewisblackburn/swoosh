import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateNestedOneWithoutArtistsInput } from "../inputs/SongCreateNestedOneWithoutArtistsInput";

@TypeGraphQL.InputType("ArtistInSongCreateWithoutPersonInput", {
  isAbstract: true
})
export class ArtistInSongCreateWithoutPersonInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  stagename!: string;

  @TypeGraphQL.Field(_type => SongCreateNestedOneWithoutArtistsInput, {
    nullable: false
  })
  song!: SongCreateNestedOneWithoutArtistsInput;
}
