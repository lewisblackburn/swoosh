import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PlatformOnMovieListRelationFilter } from "../inputs/PlatformOnMovieListRelationFilter";
import { PlatformOnShowListRelationFilter } from "../inputs/PlatformOnShowListRelationFilter";
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

  @TypeGraphQL.Field(_type => PlatformOnMovieListRelationFilter, {
    nullable: true
  })
  PlatformOnMovie?: PlatformOnMovieListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PlatformOnShowListRelationFilter, {
    nullable: true
  })
  PlatformOnShow?: PlatformOnShowListRelationFilter | undefined;
}
