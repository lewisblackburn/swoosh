import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowAvgOrderByAggregateInput } from "../inputs/ShowAvgOrderByAggregateInput";
import { ShowCountOrderByAggregateInput } from "../inputs/ShowCountOrderByAggregateInput";
import { ShowMaxOrderByAggregateInput } from "../inputs/ShowMaxOrderByAggregateInput";
import { ShowMinOrderByAggregateInput } from "../inputs/ShowMinOrderByAggregateInput";
import { ShowSumOrderByAggregateInput } from "../inputs/ShowSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ShowOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  thumbnail?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  locked?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  released?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ShowCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ShowCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShowAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ShowAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShowMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ShowMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShowMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ShowMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShowSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ShowSumOrderByAggregateInput | undefined;
}
