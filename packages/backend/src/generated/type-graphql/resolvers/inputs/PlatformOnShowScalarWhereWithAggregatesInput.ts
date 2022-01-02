import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnShowScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PlatformOnShowScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PlatformOnShowScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnShowScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PlatformOnShowScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnShowScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PlatformOnShowScalarWhereWithAggregatesInput[] | undefined;

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
  showId?: IntWithAggregatesFilter | undefined;
}
