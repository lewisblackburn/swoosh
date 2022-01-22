import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("BookReviewLikeScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class BookReviewLikeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [BookReviewLikeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: BookReviewLikeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookReviewLikeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: BookReviewLikeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookReviewLikeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: BookReviewLikeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  reviewUserId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  reviewBookId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
