import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("BookReviewScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class BookReviewScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [BookReviewScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: BookReviewScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookReviewScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: BookReviewScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookReviewScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: BookReviewScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  review?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  rating?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  bookId?: IntWithAggregatesFilter | undefined;
}
