import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformWhereInput } from "../inputs/PlatformWhereInput";

@TypeGraphQL.InputType("PlatformListRelationFilter", {
  isAbstract: true
})
export class PlatformListRelationFilter {
  @TypeGraphQL.Field(_type => PlatformWhereInput, {
    nullable: true
  })
  every?: PlatformWhereInput | undefined;

  @TypeGraphQL.Field(_type => PlatformWhereInput, {
    nullable: true
  })
  some?: PlatformWhereInput | undefined;

  @TypeGraphQL.Field(_type => PlatformWhereInput, {
    nullable: true
  })
  none?: PlatformWhereInput | undefined;
}
