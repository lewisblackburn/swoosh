import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class WatchlistScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [WatchlistScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: WatchlistScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WatchlistScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: WatchlistScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WatchlistScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: WatchlistScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;
}
