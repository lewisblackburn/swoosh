import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInSongCreateWithoutSongInput } from "../inputs/ArtistInSongCreateWithoutSongInput";
import { ArtistInSongWhereUniqueInput } from "../inputs/ArtistInSongWhereUniqueInput";

@TypeGraphQL.InputType("ArtistInSongCreateOrConnectWithoutSongInput", {
  isAbstract: true
})
export class ArtistInSongCreateOrConnectWithoutSongInput {
  @TypeGraphQL.Field(_type => ArtistInSongWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistInSongWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArtistInSongCreateWithoutSongInput, {
    nullable: false
  })
  create!: ArtistInSongCreateWithoutSongInput;
}
