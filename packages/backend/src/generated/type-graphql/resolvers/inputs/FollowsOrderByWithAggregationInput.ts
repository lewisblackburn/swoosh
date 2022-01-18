import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowsAvgOrderByAggregateInput } from "../inputs/FollowsAvgOrderByAggregateInput";
import { FollowsCountOrderByAggregateInput } from "../inputs/FollowsCountOrderByAggregateInput";
import { FollowsMaxOrderByAggregateInput } from "../inputs/FollowsMaxOrderByAggregateInput";
import { FollowsMinOrderByAggregateInput } from "../inputs/FollowsMinOrderByAggregateInput";
import { FollowsSumOrderByAggregateInput } from "../inputs/FollowsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FollowsOrderByWithAggregationInput", {
  isAbstract: true
})
export class FollowsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  followingId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  followerId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FollowsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: FollowsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FollowsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: FollowsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FollowsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: FollowsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FollowsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: FollowsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FollowsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: FollowsSumOrderByAggregateInput | undefined;
}
