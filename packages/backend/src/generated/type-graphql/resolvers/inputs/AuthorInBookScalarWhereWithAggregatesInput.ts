import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

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

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
