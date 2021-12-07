import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { MovieRelationFilter } from "../inputs/MovieRelationFilter";
import { PersonRelationFilter } from "../inputs/PersonRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ActorInMovieWhereInput {
  @TypeGraphQL.Field(_type => [ActorInMovieWhereInput], {
    nullable: true
  })
  AND?: ActorInMovieWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInMovieWhereInput], {
    nullable: true
  })
  OR?: ActorInMovieWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInMovieWhereInput], {
    nullable: true
  })
  NOT?: ActorInMovieWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieRelationFilter, {
    nullable: true
  })
  movie?: MovieRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  movieId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PersonRelationFilter, {
    nullable: true
  })
  person?: PersonRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  personId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  role?: StringFilter | undefined;
}
