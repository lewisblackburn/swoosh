import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("BookLikeScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class BookLikeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [BookLikeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: BookLikeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookLikeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: BookLikeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookLikeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: BookLikeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  bookId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
