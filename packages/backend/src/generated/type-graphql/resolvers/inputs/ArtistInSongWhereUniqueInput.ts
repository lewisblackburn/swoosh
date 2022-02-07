import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInSongPersonIdSongIdCompoundUniqueInput } from "../inputs/ArtistInSongPersonIdSongIdCompoundUniqueInput";

@TypeGraphQL.InputType("ArtistInSongWhereUniqueInput", {
  isAbstract: true
})
export class ArtistInSongWhereUniqueInput {
  @TypeGraphQL.Field(_type => ArtistInSongPersonIdSongIdCompoundUniqueInput, {
    nullable: true
  })
  personId_songId?: ArtistInSongPersonIdSongIdCompoundUniqueInput | undefined;
}
