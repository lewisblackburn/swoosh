import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformWhereInput } from "../inputs/PlatformWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformRelationFilter {
  @TypeGraphQL.Field(_type => PlatformWhereInput, {
    nullable: true
  })
  is?: PlatformWhereInput | undefined;

  @TypeGraphQL.Field(_type => PlatformWhereInput, {
    nullable: true
  })
  isNot?: PlatformWhereInput | undefined;
}
