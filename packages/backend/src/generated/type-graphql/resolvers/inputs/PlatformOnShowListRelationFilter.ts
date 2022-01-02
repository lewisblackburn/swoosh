import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformOnShowWhereInput } from "../inputs/PlatformOnShowWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnShowListRelationFilter {
  @TypeGraphQL.Field(_type => PlatformOnShowWhereInput, {
    nullable: true
  })
  every?: PlatformOnShowWhereInput | undefined;

  @TypeGraphQL.Field(_type => PlatformOnShowWhereInput, {
    nullable: true
  })
  some?: PlatformOnShowWhereInput | undefined;

  @TypeGraphQL.Field(_type => PlatformOnShowWhereInput, {
    nullable: true
  })
  none?: PlatformOnShowWhereInput | undefined;
}
