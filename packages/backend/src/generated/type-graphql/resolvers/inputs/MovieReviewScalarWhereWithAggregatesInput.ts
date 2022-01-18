import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("MovieReviewScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class MovieReviewScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MovieReviewScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MovieReviewScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MovieReviewScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MovieReviewScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  title?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  review?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  rating?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  movieId?: IntNullableWithAggregatesFilter | undefined;
}
