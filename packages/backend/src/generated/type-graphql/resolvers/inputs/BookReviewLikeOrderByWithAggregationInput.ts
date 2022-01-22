import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewLikeAvgOrderByAggregateInput } from "../inputs/BookReviewLikeAvgOrderByAggregateInput";
import { BookReviewLikeCountOrderByAggregateInput } from "../inputs/BookReviewLikeCountOrderByAggregateInput";
import { BookReviewLikeMaxOrderByAggregateInput } from "../inputs/BookReviewLikeMaxOrderByAggregateInput";
import { BookReviewLikeMinOrderByAggregateInput } from "../inputs/BookReviewLikeMinOrderByAggregateInput";
import { BookReviewLikeSumOrderByAggregateInput } from "../inputs/BookReviewLikeSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BookReviewLikeOrderByWithAggregationInput", {
  isAbstract: true
})
export class BookReviewLikeOrderByWithAggregationInput {
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
  reviewBookId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BookReviewLikeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: BookReviewLikeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookReviewLikeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: BookReviewLikeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookReviewLikeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: BookReviewLikeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookReviewLikeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: BookReviewLikeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookReviewLikeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: BookReviewLikeSumOrderByAggregateInput | undefined;
}
