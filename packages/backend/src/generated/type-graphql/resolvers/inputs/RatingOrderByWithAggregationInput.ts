import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingAvgOrderByAggregateInput } from "../inputs/RatingAvgOrderByAggregateInput";
import { RatingCountOrderByAggregateInput } from "../inputs/RatingCountOrderByAggregateInput";
import { RatingMaxOrderByAggregateInput } from "../inputs/RatingMaxOrderByAggregateInput";
import { RatingMinOrderByAggregateInput } from "../inputs/RatingMinOrderByAggregateInput";
import { RatingSumOrderByAggregateInput } from "../inputs/RatingSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RatingOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  age?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => RatingCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: RatingCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RatingAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: RatingAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RatingMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: RatingMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RatingMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: RatingMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RatingSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: RatingSumOrderByAggregateInput | undefined;
}