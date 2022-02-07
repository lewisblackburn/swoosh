import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookLikeAvgOrderByAggregateInput } from "../inputs/BookLikeAvgOrderByAggregateInput";
import { BookLikeCountOrderByAggregateInput } from "../inputs/BookLikeCountOrderByAggregateInput";
import { BookLikeMaxOrderByAggregateInput } from "../inputs/BookLikeMaxOrderByAggregateInput";
import { BookLikeMinOrderByAggregateInput } from "../inputs/BookLikeMinOrderByAggregateInput";
import { BookLikeSumOrderByAggregateInput } from "../inputs/BookLikeSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BookLikeOrderByWithAggregationInput", {
  isAbstract: true
})
export class BookLikeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  bookId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BookLikeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: BookLikeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookLikeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: BookLikeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookLikeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: BookLikeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookLikeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: BookLikeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookLikeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: BookLikeSumOrderByAggregateInput | undefined;
}
