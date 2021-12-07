import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ActorInMovieScalarWhereInput {
  @TypeGraphQL.Field(_type => [ActorInMovieScalarWhereInput], {
    nullable: true
  })
  AND?: ActorInMovieScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInMovieScalarWhereInput], {
    nullable: true
  })
  OR?: ActorInMovieScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInMovieScalarWhereInput], {
    nullable: true
  })
  NOT?: ActorInMovieScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  movieId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  personId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  role?: StringFilter | undefined;
}
