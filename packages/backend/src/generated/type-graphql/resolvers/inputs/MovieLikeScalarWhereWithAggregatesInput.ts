import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("MovieLikeScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class MovieLikeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MovieLikeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MovieLikeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MovieLikeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MovieLikeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  movieId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
