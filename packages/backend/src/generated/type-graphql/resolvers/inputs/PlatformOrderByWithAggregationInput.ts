import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformAvgOrderByAggregateInput } from "../inputs/PlatformAvgOrderByAggregateInput";
import { PlatformCountOrderByAggregateInput } from "../inputs/PlatformCountOrderByAggregateInput";
import { PlatformMaxOrderByAggregateInput } from "../inputs/PlatformMaxOrderByAggregateInput";
import { PlatformMinOrderByAggregateInput } from "../inputs/PlatformMinOrderByAggregateInput";
import { PlatformSumOrderByAggregateInput } from "../inputs/PlatformSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  apiKey?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PlatformCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PlatformCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlatformAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PlatformAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlatformMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PlatformMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlatformMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PlatformMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlatformSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PlatformSumOrderByAggregateInput | undefined;
}
