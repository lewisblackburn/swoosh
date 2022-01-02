import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformOnShowAvgOrderByAggregateInput } from "../inputs/PlatformOnShowAvgOrderByAggregateInput";
import { PlatformOnShowCountOrderByAggregateInput } from "../inputs/PlatformOnShowCountOrderByAggregateInput";
import { PlatformOnShowMaxOrderByAggregateInput } from "../inputs/PlatformOnShowMaxOrderByAggregateInput";
import { PlatformOnShowMinOrderByAggregateInput } from "../inputs/PlatformOnShowMinOrderByAggregateInput";
import { PlatformOnShowSumOrderByAggregateInput } from "../inputs/PlatformOnShowSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnShowOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  price?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  platformId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  showId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PlatformOnShowCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PlatformOnShowCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlatformOnShowAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PlatformOnShowAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlatformOnShowMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PlatformOnShowMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlatformOnShowMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PlatformOnShowMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlatformOnShowSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PlatformOnShowSumOrderByAggregateInput | undefined;
}
