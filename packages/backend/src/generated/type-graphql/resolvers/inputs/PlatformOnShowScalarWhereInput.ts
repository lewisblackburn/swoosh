import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnShowScalarWhereInput {
  @TypeGraphQL.Field(_type => [PlatformOnShowScalarWhereInput], {
    nullable: true
  })
  AND?: PlatformOnShowScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnShowScalarWhereInput], {
    nullable: true
  })
  OR?: PlatformOnShowScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnShowScalarWhereInput], {
    nullable: true
  })
  NOT?: PlatformOnShowScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  price?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  platformId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  showId?: IntFilter | undefined;
}