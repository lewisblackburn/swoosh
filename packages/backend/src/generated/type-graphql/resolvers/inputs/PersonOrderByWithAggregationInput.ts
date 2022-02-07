import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonAvgOrderByAggregateInput } from "../inputs/PersonAvgOrderByAggregateInput";
import { PersonCountOrderByAggregateInput } from "../inputs/PersonCountOrderByAggregateInput";
import { PersonMaxOrderByAggregateInput } from "../inputs/PersonMaxOrderByAggregateInput";
import { PersonMinOrderByAggregateInput } from "../inputs/PersonMinOrderByAggregateInput";
import { PersonSumOrderByAggregateInput } from "../inputs/PersonSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PersonOrderByWithAggregationInput", {
  isAbstract: true
})
export class PersonOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  career?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  poster?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  locked?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  bio?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  age?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PersonCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PersonCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PersonAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PersonAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PersonMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PersonMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PersonMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PersonMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PersonSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PersonSumOrderByAggregateInput | undefined;
}
