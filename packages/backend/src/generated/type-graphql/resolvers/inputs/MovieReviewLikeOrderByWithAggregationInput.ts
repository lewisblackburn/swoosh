import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikeAvgOrderByAggregateInput } from "../inputs/MovieReviewLikeAvgOrderByAggregateInput";
import { MovieReviewLikeCountOrderByAggregateInput } from "../inputs/MovieReviewLikeCountOrderByAggregateInput";
import { MovieReviewLikeMaxOrderByAggregateInput } from "../inputs/MovieReviewLikeMaxOrderByAggregateInput";
import { MovieReviewLikeMinOrderByAggregateInput } from "../inputs/MovieReviewLikeMinOrderByAggregateInput";
import { MovieReviewLikeSumOrderByAggregateInput } from "../inputs/MovieReviewLikeSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieReviewLikeOrderByWithAggregationInput", {
  isAbstract: true
})
export class MovieReviewLikeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  movieReviewId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MovieReviewLikeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MovieReviewLikeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MovieReviewLikeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MovieReviewLikeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MovieReviewLikeSumOrderByAggregateInput | undefined;
}
