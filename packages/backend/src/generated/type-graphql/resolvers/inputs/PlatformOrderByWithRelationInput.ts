import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieOrderByRelationAggregateInput } from "../inputs/MovieOrderByRelationAggregateInput";
import { ShowOrderByRelationAggregateInput } from "../inputs/ShowOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => ShowOrderByRelationAggregateInput, {
    nullable: true
  })
  shows?: ShowOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieOrderByRelationAggregateInput, {
    nullable: true
  })
  movies?: MovieOrderByRelationAggregateInput | undefined;
}
