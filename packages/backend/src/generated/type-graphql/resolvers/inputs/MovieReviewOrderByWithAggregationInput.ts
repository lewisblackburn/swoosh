import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewAvgOrderByAggregateInput } from "../inputs/MovieReviewAvgOrderByAggregateInput";
import { MovieReviewCountOrderByAggregateInput } from "../inputs/MovieReviewCountOrderByAggregateInput";
import { MovieReviewMaxOrderByAggregateInput } from "../inputs/MovieReviewMaxOrderByAggregateInput";
import { MovieReviewMinOrderByAggregateInput } from "../inputs/MovieReviewMinOrderByAggregateInput";
import { MovieReviewSumOrderByAggregateInput } from "../inputs/MovieReviewSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieReviewOrderByWithAggregationInput", {
  isAbstract: true
})
export class MovieReviewOrderByWithAggregationInput {
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
  movieId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MovieReviewCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MovieReviewCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MovieReviewAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MovieReviewMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MovieReviewMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MovieReviewSumOrderByAggregateInput | undefined;
}
