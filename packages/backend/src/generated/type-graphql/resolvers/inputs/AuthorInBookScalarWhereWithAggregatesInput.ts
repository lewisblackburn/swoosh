import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("AuthorInBookScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class AuthorInBookScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [AuthorInBookScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: AuthorInBookScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorInBookScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: AuthorInBookScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorInBookScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: AuthorInBookScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  bookId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  personId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  stagename?: StringWithAggregatesFilter | undefined;
}
