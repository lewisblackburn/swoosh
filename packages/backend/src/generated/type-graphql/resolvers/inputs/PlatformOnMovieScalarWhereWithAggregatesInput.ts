import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnMovieScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PlatformOnMovieScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PlatformOnMovieScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnMovieScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PlatformOnMovieScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnMovieScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PlatformOnMovieScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  price?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  platformId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  movieId?: IntWithAggregatesFilter | undefined;
}
