import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInMovieAvgOrderByAggregateInput } from "../inputs/ActorInMovieAvgOrderByAggregateInput";
import { ActorInMovieCountOrderByAggregateInput } from "../inputs/ActorInMovieCountOrderByAggregateInput";
import { ActorInMovieMaxOrderByAggregateInput } from "../inputs/ActorInMovieMaxOrderByAggregateInput";
import { ActorInMovieMinOrderByAggregateInput } from "../inputs/ActorInMovieMinOrderByAggregateInput";
import { ActorInMovieSumOrderByAggregateInput } from "../inputs/ActorInMovieSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ActorInMovieOrderByWithAggregationInput", {
  isAbstract: true
})
export class ActorInMovieOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  movieId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  personId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  role?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ActorInMovieCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ActorInMovieCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ActorInMovieAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ActorInMovieAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ActorInMovieMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ActorInMovieMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ActorInMovieMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ActorInMovieMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ActorInMovieSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ActorInMovieSumOrderByAggregateInput | undefined;
}
