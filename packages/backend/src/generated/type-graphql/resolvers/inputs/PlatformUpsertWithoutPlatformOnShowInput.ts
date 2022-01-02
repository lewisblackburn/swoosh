import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformCreateWithoutPlatformOnShowInput } from "../inputs/PlatformCreateWithoutPlatformOnShowInput";
import { PlatformUpdateWithoutPlatformOnShowInput } from "../inputs/PlatformUpdateWithoutPlatformOnShowInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformUpsertWithoutPlatformOnShowInput {
  @TypeGraphQL.Field(_type => PlatformUpdateWithoutPlatformOnShowInput, {
    nullable: false
  })
  update!: PlatformUpdateWithoutPlatformOnShowInput;

  @TypeGraphQL.Field(_type => PlatformCreateWithoutPlatformOnShowInput, {
    nullable: false
  })
  create!: PlatformCreateWithoutPlatformOnShowInput;
}
