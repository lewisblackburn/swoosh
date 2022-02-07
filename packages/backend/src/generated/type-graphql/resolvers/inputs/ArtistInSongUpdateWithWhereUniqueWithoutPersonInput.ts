import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInSongUpdateWithoutPersonInput } from "../inputs/ArtistInSongUpdateWithoutPersonInput";
import { ArtistInSongWhereUniqueInput } from "../inputs/ArtistInSongWhereUniqueInput";

@TypeGraphQL.InputType("ArtistInSongUpdateWithWhereUniqueWithoutPersonInput", {
  isAbstract: true
})
export class ArtistInSongUpdateWithWhereUniqueWithoutPersonInput {
  @TypeGraphQL.Field(_type => ArtistInSongWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistInSongWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArtistInSongUpdateWithoutPersonInput, {
    nullable: false
  })
  data!: ArtistInSongUpdateWithoutPersonInput;
}
