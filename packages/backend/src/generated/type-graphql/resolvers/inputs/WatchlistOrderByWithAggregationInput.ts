import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WatchlistAvgOrderByAggregateInput } from "../inputs/WatchlistAvgOrderByAggregateInput";
import { WatchlistCountOrderByAggregateInput } from "../inputs/WatchlistCountOrderByAggregateInput";
import { WatchlistMaxOrderByAggregateInput } from "../inputs/WatchlistMaxOrderByAggregateInput";
import { WatchlistMinOrderByAggregateInput } from "../inputs/WatchlistMinOrderByAggregateInput";
import { WatchlistSumOrderByAggregateInput } from "../inputs/WatchlistSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("WatchlistOrderByWithAggregationInput", {
  isAbstract: true
})
export class WatchlistOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => WatchlistCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: WatchlistCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WatchlistAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: WatchlistAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WatchlistMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: WatchlistMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WatchlistMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: WatchlistMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WatchlistSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: WatchlistSumOrderByAggregateInput | undefined;
}
