import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewLikeAvgOrderByAggregateInput } from "../inputs/SongReviewLikeAvgOrderByAggregateInput";
import { SongReviewLikeCountOrderByAggregateInput } from "../inputs/SongReviewLikeCountOrderByAggregateInput";
import { SongReviewLikeMaxOrderByAggregateInput } from "../inputs/SongReviewLikeMaxOrderByAggregateInput";
import { SongReviewLikeMinOrderByAggregateInput } from "../inputs/SongReviewLikeMinOrderByAggregateInput";
import { SongReviewLikeSumOrderByAggregateInput } from "../inputs/SongReviewLikeSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SongReviewLikeOrderByWithAggregationInput", {
  isAbstract: true
})
export class SongReviewLikeOrderByWithAggregationInput {
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
  reviewSongId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SongReviewLikeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SongReviewLikeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongReviewLikeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SongReviewLikeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongReviewLikeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SongReviewLikeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongReviewLikeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SongReviewLikeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongReviewLikeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SongReviewLikeSumOrderByAggregateInput | undefined;
}
