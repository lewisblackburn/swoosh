import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInSongCreateWithoutPersonInput } from "../inputs/ArtistInSongCreateWithoutPersonInput";
import { ArtistInSongWhereUniqueInput } from "../inputs/ArtistInSongWhereUniqueInput";

@TypeGraphQL.InputType("ArtistInSongCreateOrConnectWithoutPersonInput", {
  isAbstract: true
})
export class ArtistInSongCreateOrConnectWithoutPersonInput {
  @TypeGraphQL.Field(_type => ArtistInSongWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistInSongWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArtistInSongCreateWithoutPersonInput, {
    nullable: false
  })
  create!: ArtistInSongCreateWithoutPersonInput;
}
