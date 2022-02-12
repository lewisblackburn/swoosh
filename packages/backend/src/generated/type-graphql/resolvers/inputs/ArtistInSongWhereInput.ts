import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PersonRelationFilter } from "../inputs/PersonRelationFilter";
import { SongRelationFilter } from "../inputs/SongRelationFilter";

@TypeGraphQL.InputType("ArtistInSongWhereInput", {
  isAbstract: true
})
export class ArtistInSongWhereInput {
  @TypeGraphQL.Field(_type => [ArtistInSongWhereInput], {
    nullable: true
  })
  AND?: ArtistInSongWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInSongWhereInput], {
    nullable: true
  })
  OR?: ArtistInSongWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInSongWhereInput], {
    nullable: true
  })
  NOT?: ArtistInSongWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => SongRelationFilter, {
    nullable: true
  })
  song?: SongRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  songId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PersonRelationFilter, {
    nullable: true
  })
  person?: PersonRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  personId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
