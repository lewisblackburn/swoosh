import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("SongInMovieScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SongInMovieScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SongInMovieScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SongInMovieScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInMovieScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SongInMovieScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInMovieScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SongInMovieScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  timestamp?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  description?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  songId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  movieId?: IntWithAggregatesFilter | undefined;
}
