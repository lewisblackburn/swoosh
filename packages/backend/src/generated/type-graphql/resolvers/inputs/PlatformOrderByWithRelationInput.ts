import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformOnMovieOrderByRelationAggregateInput } from "../inputs/PlatformOnMovieOrderByRelationAggregateInput";
import { PlatformOnShowOrderByRelationAggregateInput } from "../inputs/PlatformOnShowOrderByRelationAggregateInput";
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

  @TypeGraphQL.Field(_type => PlatformOnMovieOrderByRelationAggregateInput, {
    nullable: true
  })
  PlatformOnMovie?: PlatformOnMovieOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlatformOnShowOrderByRelationAggregateInput, {
    nullable: true
  })
  PlatformOnShow?: PlatformOnShowOrderByRelationAggregateInput | undefined;
}
