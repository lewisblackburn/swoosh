import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewLikeAvgOrderByAggregateInput } from "../inputs/ShowReviewLikeAvgOrderByAggregateInput";
import { ShowReviewLikeCountOrderByAggregateInput } from "../inputs/ShowReviewLikeCountOrderByAggregateInput";
import { ShowReviewLikeMaxOrderByAggregateInput } from "../inputs/ShowReviewLikeMaxOrderByAggregateInput";
import { ShowReviewLikeMinOrderByAggregateInput } from "../inputs/ShowReviewLikeMinOrderByAggregateInput";
import { ShowReviewLikeSumOrderByAggregateInput } from "../inputs/ShowReviewLikeSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ShowReviewLikeOrderByWithAggregationInput", {
  isAbstract: true
})
export class ShowReviewLikeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  reviewUserId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  reviewShowId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ShowReviewLikeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ShowReviewLikeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShowReviewLikeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ShowReviewLikeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShowReviewLikeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ShowReviewLikeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShowReviewLikeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ShowReviewLikeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShowReviewLikeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ShowReviewLikeSumOrderByAggregateInput | undefined;
}
