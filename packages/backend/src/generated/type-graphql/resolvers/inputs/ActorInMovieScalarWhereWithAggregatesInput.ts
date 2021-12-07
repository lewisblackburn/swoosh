import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ActorInMovieScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ActorInMovieScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ActorInMovieScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInMovieScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ActorInMovieScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInMovieScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ActorInMovieScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  movieId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  personId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  role?: StringWithAggregatesFilter | undefined;
}
