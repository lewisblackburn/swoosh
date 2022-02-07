import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongLikeAvgOrderByAggregateInput } from "../inputs/SongLikeAvgOrderByAggregateInput";
import { SongLikeCountOrderByAggregateInput } from "../inputs/SongLikeCountOrderByAggregateInput";
import { SongLikeMaxOrderByAggregateInput } from "../inputs/SongLikeMaxOrderByAggregateInput";
import { SongLikeMinOrderByAggregateInput } from "../inputs/SongLikeMinOrderByAggregateInput";
import { SongLikeSumOrderByAggregateInput } from "../inputs/SongLikeSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SongLikeOrderByWithAggregationInput", {
  isAbstract: true
})
export class SongLikeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  songId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SongLikeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SongLikeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongLikeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SongLikeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongLikeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SongLikeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongLikeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SongLikeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongLikeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SongLikeSumOrderByAggregateInput | undefined;
}
