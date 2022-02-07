import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInSongWhereInput } from "../inputs/ArtistInSongWhereInput";

@TypeGraphQL.InputType("ArtistInSongListRelationFilter", {
  isAbstract: true
})
export class ArtistInSongListRelationFilter {
  @TypeGraphQL.Field(_type => ArtistInSongWhereInput, {
    nullable: true
  })
  every?: ArtistInSongWhereInput | undefined;

  @TypeGraphQL.Field(_type => ArtistInSongWhereInput, {
    nullable: true
  })
  some?: ArtistInSongWhereInput | undefined;

  @TypeGraphQL.Field(_type => ArtistInSongWhereInput, {
    nullable: true
  })
  none?: ArtistInSongWhereInput | undefined;
}
