import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInSongCreateWithoutSongInput } from "../inputs/ArtistInSongCreateWithoutSongInput";
import { ArtistInSongUpdateWithoutSongInput } from "../inputs/ArtistInSongUpdateWithoutSongInput";
import { ArtistInSongWhereUniqueInput } from "../inputs/ArtistInSongWhereUniqueInput";

@TypeGraphQL.InputType("ArtistInSongUpsertWithWhereUniqueWithoutSongInput", {
  isAbstract: true
})
export class ArtistInSongUpsertWithWhereUniqueWithoutSongInput {
  @TypeGraphQL.Field(_type => ArtistInSongWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistInSongWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArtistInSongUpdateWithoutSongInput, {
    nullable: false
  })
  update!: ArtistInSongUpdateWithoutSongInput;

  @TypeGraphQL.Field(_type => ArtistInSongCreateWithoutSongInput, {
    nullable: false
  })
  create!: ArtistInSongCreateWithoutSongInput;
}
