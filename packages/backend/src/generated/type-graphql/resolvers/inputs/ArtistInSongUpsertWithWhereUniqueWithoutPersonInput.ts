import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInSongCreateWithoutPersonInput } from "../inputs/ArtistInSongCreateWithoutPersonInput";
import { ArtistInSongUpdateWithoutPersonInput } from "../inputs/ArtistInSongUpdateWithoutPersonInput";
import { ArtistInSongWhereUniqueInput } from "../inputs/ArtistInSongWhereUniqueInput";

@TypeGraphQL.InputType("ArtistInSongUpsertWithWhereUniqueWithoutPersonInput", {
  isAbstract: true
})
export class ArtistInSongUpsertWithWhereUniqueWithoutPersonInput {
  @TypeGraphQL.Field(_type => ArtistInSongWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistInSongWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArtistInSongUpdateWithoutPersonInput, {
    nullable: false
  })
  update!: ArtistInSongUpdateWithoutPersonInput;

  @TypeGraphQL.Field(_type => ArtistInSongCreateWithoutPersonInput, {
    nullable: false
  })
  create!: ArtistInSongCreateWithoutPersonInput;
}
