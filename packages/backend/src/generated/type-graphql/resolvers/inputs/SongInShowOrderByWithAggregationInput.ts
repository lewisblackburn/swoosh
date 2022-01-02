import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongInShowAvgOrderByAggregateInput } from "../inputs/SongInShowAvgOrderByAggregateInput";
import { SongInShowCountOrderByAggregateInput } from "../inputs/SongInShowCountOrderByAggregateInput";
import { SongInShowMaxOrderByAggregateInput } from "../inputs/SongInShowMaxOrderByAggregateInput";
import { SongInShowMinOrderByAggregateInput } from "../inputs/SongInShowMinOrderByAggregateInput";
import { SongInShowSumOrderByAggregateInput } from "../inputs/SongInShowSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongInShowOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  timestamp?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  songId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  showId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SongInShowCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SongInShowCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongInShowAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SongInShowAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongInShowMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SongInShowMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongInShowMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SongInShowMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongInShowSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SongInShowSumOrderByAggregateInput | undefined;
}
