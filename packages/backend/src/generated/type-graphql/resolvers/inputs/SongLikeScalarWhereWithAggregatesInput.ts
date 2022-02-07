import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("SongLikeScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SongLikeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SongLikeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SongLikeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongLikeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SongLikeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongLikeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SongLikeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  songId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
