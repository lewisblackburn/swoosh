import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PlatformScalarWhereInput", {
  isAbstract: true
})
export class PlatformScalarWhereInput {
  @TypeGraphQL.Field(_type => [PlatformScalarWhereInput], {
    nullable: true
  })
  AND?: PlatformScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformScalarWhereInput], {
    nullable: true
  })
  OR?: PlatformScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformScalarWhereInput], {
    nullable: true
  })
  NOT?: PlatformScalarWhereInput[] | undefined;

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
}
