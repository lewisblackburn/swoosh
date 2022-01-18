import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PlatformScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class PlatformScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PlatformScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PlatformScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PlatformScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PlatformScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  apiKey?: StringWithAggregatesFilter | undefined;
}
