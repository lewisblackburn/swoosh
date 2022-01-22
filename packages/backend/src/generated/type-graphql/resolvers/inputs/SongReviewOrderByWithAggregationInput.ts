import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewAvgOrderByAggregateInput } from "../inputs/SongReviewAvgOrderByAggregateInput";
import { SongReviewCountOrderByAggregateInput } from "../inputs/SongReviewCountOrderByAggregateInput";
import { SongReviewMaxOrderByAggregateInput } from "../inputs/SongReviewMaxOrderByAggregateInput";
import { SongReviewMinOrderByAggregateInput } from "../inputs/SongReviewMinOrderByAggregateInput";
import { SongReviewSumOrderByAggregateInput } from "../inputs/SongReviewSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SongReviewOrderByWithAggregationInput", {
  isAbstract: true
})
export class SongReviewOrderByWithAggregationInput {
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
  songId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SongReviewCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SongReviewCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongReviewAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SongReviewAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongReviewMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SongReviewMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongReviewMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SongReviewMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongReviewSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SongReviewSumOrderByAggregateInput | undefined;
}
