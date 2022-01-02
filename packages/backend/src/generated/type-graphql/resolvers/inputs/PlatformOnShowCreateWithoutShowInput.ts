import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformCreateNestedOneWithoutPlatformOnShowInput } from "../inputs/PlatformCreateNestedOneWithoutPlatformOnShowInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnShowCreateWithoutShowInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  price!: string;

  @TypeGraphQL.Field(_type => PlatformCreateNestedOneWithoutPlatformOnShowInput, {
    nullable: false
  })
  platform!: PlatformCreateNestedOneWithoutPlatformOnShowInput;
}
