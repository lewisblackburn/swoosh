import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewAvgOrderByAggregateInput } from "../inputs/ShowReviewAvgOrderByAggregateInput";
import { ShowReviewCountOrderByAggregateInput } from "../inputs/ShowReviewCountOrderByAggregateInput";
import { ShowReviewMaxOrderByAggregateInput } from "../inputs/ShowReviewMaxOrderByAggregateInput";
import { ShowReviewMinOrderByAggregateInput } from "../inputs/ShowReviewMinOrderByAggregateInput";
import { ShowReviewSumOrderByAggregateInput } from "../inputs/ShowReviewSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ShowReviewOrderByWithAggregationInput", {
  isAbstract: true
})
export class ShowReviewOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  review?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rating?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  showId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ShowReviewCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ShowReviewCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShowReviewAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ShowReviewAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShowReviewMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ShowReviewMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShowReviewMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ShowReviewMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShowReviewSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ShowReviewSumOrderByAggregateInput | undefined;
}
