import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PlatformRelationFilter } from "../inputs/PlatformRelationFilter";
import { ShowRelationFilter } from "../inputs/ShowRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnShowWhereInput {
  @TypeGraphQL.Field(_type => [PlatformOnShowWhereInput], {
    nullable: true
  })
  AND?: PlatformOnShowWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnShowWhereInput], {
    nullable: true
  })
  OR?: PlatformOnShowWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnShowWhereInput], {
    nullable: true
  })
  NOT?: PlatformOnShowWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => ShowRelationFilter, {
    nullable: true
  })
  show?: ShowRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  showId?: IntFilter | undefined;
}
