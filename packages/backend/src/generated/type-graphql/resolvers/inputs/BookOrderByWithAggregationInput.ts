import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookAvgOrderByAggregateInput } from "../inputs/BookAvgOrderByAggregateInput";
import { BookCountOrderByAggregateInput } from "../inputs/BookCountOrderByAggregateInput";
import { BookMaxOrderByAggregateInput } from "../inputs/BookMaxOrderByAggregateInput";
import { BookMinOrderByAggregateInput } from "../inputs/BookMinOrderByAggregateInput";
import { BookSumOrderByAggregateInput } from "../inputs/BookSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BookOrderByWithAggregationInput", {
  isAbstract: true
})
export class BookOrderByWithAggregationInput {
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
  poster?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => BookCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: BookCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: BookAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: BookMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: BookMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: BookSumOrderByAggregateInput | undefined;
}
