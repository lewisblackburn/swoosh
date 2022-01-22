import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("ShowReviewScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ShowReviewScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ShowReviewScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ShowReviewScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ShowReviewScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ShowReviewScalarWhereWithAggregatesInput[] | undefined;

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
  showId?: IntWithAggregatesFilter | undefined;
}
