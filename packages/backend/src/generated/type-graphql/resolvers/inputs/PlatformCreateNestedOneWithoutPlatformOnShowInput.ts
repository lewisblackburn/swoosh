import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformCreateOrConnectWithoutPlatformOnShowInput } from "../inputs/PlatformCreateOrConnectWithoutPlatformOnShowInput";
import { PlatformCreateWithoutPlatformOnShowInput } from "../inputs/PlatformCreateWithoutPlatformOnShowInput";
import { PlatformWhereUniqueInput } from "../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformCreateNestedOneWithoutPlatformOnShowInput {
  @TypeGraphQL.Field(_type => PlatformCreateWithoutPlatformOnShowInput, {
    nullable: true
  })
  create?: PlatformCreateWithoutPlatformOnShowInput | undefined;

  @TypeGraphQL.Field(_type => PlatformCreateOrConnectWithoutPlatformOnShowInput, {
    nullable: true
  })
  connectOrCreate?: PlatformCreateOrConnectWithoutPlatformOnShowInput | undefined;

  @TypeGraphQL.Field(_type => PlatformWhereUniqueInput, {
    nullable: true
  })
  connect?: PlatformWhereUniqueInput | undefined;
}
