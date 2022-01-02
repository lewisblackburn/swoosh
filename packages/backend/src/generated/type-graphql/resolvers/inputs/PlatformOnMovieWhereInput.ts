import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { MovieRelationFilter } from "../inputs/MovieRelationFilter";
import { PlatformRelationFilter } from "../inputs/PlatformRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnMovieWhereInput {
  @TypeGraphQL.Field(_type => [PlatformOnMovieWhereInput], {
    nullable: true
  })
  AND?: PlatformOnMovieWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnMovieWhereInput], {
    nullable: true
  })
  OR?: PlatformOnMovieWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnMovieWhereInput], {
    nullable: true
  })
  NOT?: PlatformOnMovieWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  price?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PlatformRelationFilter, {
    nullable: true
  })
  platform?: PlatformRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  platformId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => MovieRelationFilter, {
    nullable: true
  })
  movie?: MovieRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  movieId?: IntFilter | undefined;
}
