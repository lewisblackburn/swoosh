import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("ShowReviewLikeScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ShowReviewLikeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ShowReviewLikeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ShowReviewLikeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewLikeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ShowReviewLikeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewLikeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ShowReviewLikeScalarWhereWithAggregatesInput[] | undefined;

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
  reviewShowId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
