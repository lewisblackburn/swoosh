import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("ShowLikeScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ShowLikeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ShowLikeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ShowLikeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowLikeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ShowLikeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowLikeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ShowLikeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  showId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
