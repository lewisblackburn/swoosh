import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInShowAvgOrderByAggregateInput } from "../inputs/ActorInShowAvgOrderByAggregateInput";
import { ActorInShowCountOrderByAggregateInput } from "../inputs/ActorInShowCountOrderByAggregateInput";
import { ActorInShowMaxOrderByAggregateInput } from "../inputs/ActorInShowMaxOrderByAggregateInput";
import { ActorInShowMinOrderByAggregateInput } from "../inputs/ActorInShowMinOrderByAggregateInput";
import { ActorInShowSumOrderByAggregateInput } from "../inputs/ActorInShowSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ActorInShowOrderByWithAggregationInput", {
  isAbstract: true
})
export class ActorInShowOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  showId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  personId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  role?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ActorInShowCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ActorInShowCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ActorInShowAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ActorInShowAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ActorInShowMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ActorInShowMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ActorInShowMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ActorInShowMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ActorInShowSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ActorInShowSumOrderByAggregateInput | undefined;
}
