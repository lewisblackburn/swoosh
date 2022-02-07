import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowLikeAvgOrderByAggregateInput } from "../inputs/ShowLikeAvgOrderByAggregateInput";
import { ShowLikeCountOrderByAggregateInput } from "../inputs/ShowLikeCountOrderByAggregateInput";
import { ShowLikeMaxOrderByAggregateInput } from "../inputs/ShowLikeMaxOrderByAggregateInput";
import { ShowLikeMinOrderByAggregateInput } from "../inputs/ShowLikeMinOrderByAggregateInput";
import { ShowLikeSumOrderByAggregateInput } from "../inputs/ShowLikeSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ShowLikeOrderByWithAggregationInput", {
  isAbstract: true
})
export class ShowLikeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  showId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ShowLikeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ShowLikeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShowLikeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ShowLikeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShowLikeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ShowLikeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShowLikeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ShowLikeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShowLikeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ShowLikeSumOrderByAggregateInput | undefined;
}
