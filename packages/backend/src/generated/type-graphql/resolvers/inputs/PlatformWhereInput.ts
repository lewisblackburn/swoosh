import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { MovieListRelationFilter } from "../inputs/MovieListRelationFilter";
import { ShowListRelationFilter } from "../inputs/ShowListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformWhereInput {
  @TypeGraphQL.Field(_type => [PlatformWhereInput], {
    nullable: true
  })
  AND?: PlatformWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformWhereInput], {
    nullable: true
  })
  OR?: PlatformWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformWhereInput], {
    nullable: true
  })
  NOT?: PlatformWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  apiKey?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ShowListRelationFilter, {
    nullable: true
  })
  shows?: ShowListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovieListRelationFilter, {
    nullable: true
  })
  movies?: MovieListRelationFilter | undefined;
}
