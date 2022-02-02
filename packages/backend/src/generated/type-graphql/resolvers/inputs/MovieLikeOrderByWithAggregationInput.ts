import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikeAvgOrderByAggregateInput } from "../inputs/MovieLikeAvgOrderByAggregateInput";
import { MovieLikeCountOrderByAggregateInput } from "../inputs/MovieLikeCountOrderByAggregateInput";
import { MovieLikeMaxOrderByAggregateInput } from "../inputs/MovieLikeMaxOrderByAggregateInput";
import { MovieLikeMinOrderByAggregateInput } from "../inputs/MovieLikeMinOrderByAggregateInput";
import { MovieLikeSumOrderByAggregateInput } from "../inputs/MovieLikeSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieLikeOrderByWithAggregationInput", {
  isAbstract: true
})
export class MovieLikeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  movieId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MovieLikeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MovieLikeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieLikeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MovieLikeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieLikeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MovieLikeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieLikeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MovieLikeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieLikeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MovieLikeSumOrderByAggregateInput | undefined;
}
