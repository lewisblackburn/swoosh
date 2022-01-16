import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VoteAvgOrderByAggregateInput } from "../inputs/VoteAvgOrderByAggregateInput";
import { VoteCountOrderByAggregateInput } from "../inputs/VoteCountOrderByAggregateInput";
import { VoteMaxOrderByAggregateInput } from "../inputs/VoteMaxOrderByAggregateInput";
import { VoteMinOrderByAggregateInput } from "../inputs/VoteMinOrderByAggregateInput";
import { VoteSumOrderByAggregateInput } from "../inputs/VoteSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class VoteOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  reviewId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => VoteCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: VoteCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VoteAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: VoteAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VoteMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: VoteMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VoteMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: VoteMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VoteSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: VoteSumOrderByAggregateInput | undefined;
}
