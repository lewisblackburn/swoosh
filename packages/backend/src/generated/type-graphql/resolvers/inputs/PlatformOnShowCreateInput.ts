import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformCreateNestedOneWithoutPlatformOnShowInput } from "../inputs/PlatformCreateNestedOneWithoutPlatformOnShowInput";
import { ShowCreateNestedOneWithoutPlatformsInput } from "../inputs/ShowCreateNestedOneWithoutPlatformsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnShowCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  price!: string;

  @TypeGraphQL.Field(_type => PlatformCreateNestedOneWithoutPlatformOnShowInput, {
    nullable: false
  })
  platform!: PlatformCreateNestedOneWithoutPlatformOnShowInput;

  @TypeGraphQL.Field(_type => ShowCreateNestedOneWithoutPlatformsInput, {
    nullable: false
  })
  show!: ShowCreateNestedOneWithoutPlatformsInput;
}
