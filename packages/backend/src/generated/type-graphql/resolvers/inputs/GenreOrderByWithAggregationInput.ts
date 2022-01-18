import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreAvgOrderByAggregateInput } from "../inputs/GenreAvgOrderByAggregateInput";
import { GenreCountOrderByAggregateInput } from "../inputs/GenreCountOrderByAggregateInput";
import { GenreMaxOrderByAggregateInput } from "../inputs/GenreMaxOrderByAggregateInput";
import { GenreMinOrderByAggregateInput } from "../inputs/GenreMinOrderByAggregateInput";
import { GenreSumOrderByAggregateInput } from "../inputs/GenreSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GenreOrderByWithAggregationInput", {
  isAbstract: true
})
export class GenreOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GenreCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: GenreCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GenreAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: GenreAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GenreMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: GenreMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GenreMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: GenreMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GenreSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: GenreSumOrderByAggregateInput | undefined;
}
