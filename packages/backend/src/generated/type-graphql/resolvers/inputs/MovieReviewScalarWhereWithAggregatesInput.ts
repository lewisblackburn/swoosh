import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
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
  movieId?: IntWithAggregatesFilter | undefined;
}
