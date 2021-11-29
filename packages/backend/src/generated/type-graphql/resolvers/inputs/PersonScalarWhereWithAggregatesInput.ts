import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumCareerNullableListFilter } from "../inputs/EnumCareerNullableListFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PersonScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PersonScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PersonScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PersonScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumCareerNullableListFilter, {
    nullable: true
  })
  career?: EnumCareerNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;
}
