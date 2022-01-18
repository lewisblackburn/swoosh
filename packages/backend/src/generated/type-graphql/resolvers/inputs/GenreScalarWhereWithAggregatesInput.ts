import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("GenreScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class GenreScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [GenreScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: GenreScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: GenreScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: GenreScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;
}
