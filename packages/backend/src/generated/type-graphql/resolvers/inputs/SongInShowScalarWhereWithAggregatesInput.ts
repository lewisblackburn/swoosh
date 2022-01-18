import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("SongInShowScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SongInShowScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SongInShowScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SongInShowScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInShowScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SongInShowScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInShowScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SongInShowScalarWhereWithAggregatesInput[] | undefined;

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
  showId?: IntWithAggregatesFilter | undefined;
}
