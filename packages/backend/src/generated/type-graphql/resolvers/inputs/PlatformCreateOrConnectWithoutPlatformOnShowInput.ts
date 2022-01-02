import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformCreateWithoutPlatformOnShowInput } from "../inputs/PlatformCreateWithoutPlatformOnShowInput";
import { PlatformWhereUniqueInput } from "../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformCreateOrConnectWithoutPlatformOnShowInput {
  @TypeGraphQL.Field(_type => PlatformWhereUniqueInput, {
    nullable: false
  })
  where!: PlatformWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlatformCreateWithoutPlatformOnShowInput, {
    nullable: false
  })
  create!: PlatformCreateWithoutPlatformOnShowInput;
}
