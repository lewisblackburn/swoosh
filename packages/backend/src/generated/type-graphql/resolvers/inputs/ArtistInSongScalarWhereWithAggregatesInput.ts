import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("ArtistInSongScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ArtistInSongScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ArtistInSongScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ArtistInSongScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInSongScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ArtistInSongScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInSongScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ArtistInSongScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  songId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  personId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
