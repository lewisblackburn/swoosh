import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInSongUpdateWithoutSongInput } from "../inputs/ArtistInSongUpdateWithoutSongInput";
import { ArtistInSongWhereUniqueInput } from "../inputs/ArtistInSongWhereUniqueInput";

@TypeGraphQL.InputType("ArtistInSongUpdateWithWhereUniqueWithoutSongInput", {
  isAbstract: true
})
export class ArtistInSongUpdateWithWhereUniqueWithoutSongInput {
  @TypeGraphQL.Field(_type => ArtistInSongWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistInSongWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArtistInSongUpdateWithoutSongInput, {
    nullable: false
  })
  data!: ArtistInSongUpdateWithoutSongInput;
}
