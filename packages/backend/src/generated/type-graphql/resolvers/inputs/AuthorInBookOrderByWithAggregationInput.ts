import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorInBookAvgOrderByAggregateInput } from "../inputs/AuthorInBookAvgOrderByAggregateInput";
import { AuthorInBookCountOrderByAggregateInput } from "../inputs/AuthorInBookCountOrderByAggregateInput";
import { AuthorInBookMaxOrderByAggregateInput } from "../inputs/AuthorInBookMaxOrderByAggregateInput";
import { AuthorInBookMinOrderByAggregateInput } from "../inputs/AuthorInBookMinOrderByAggregateInput";
import { AuthorInBookSumOrderByAggregateInput } from "../inputs/AuthorInBookSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AuthorInBookOrderByWithAggregationInput", {
  isAbstract: true
})
export class AuthorInBookOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  bookId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  personId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  penname?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AuthorInBookCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AuthorInBookCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AuthorInBookAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: AuthorInBookAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AuthorInBookMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AuthorInBookMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AuthorInBookMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AuthorInBookMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AuthorInBookSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: AuthorInBookSumOrderByAggregateInput | undefined;
}
