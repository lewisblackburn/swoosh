import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformOnShowUpdateWithoutPlatformInput } from "../inputs/PlatformOnShowUpdateWithoutPlatformInput";
import { PlatformOnShowWhereUniqueInput } from "../inputs/PlatformOnShowWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnShowUpdateWithWhereUniqueWithoutPlatformInput {
  @TypeGraphQL.Field(_type => PlatformOnShowWhereUniqueInput, {
    nullable: false
  })
  where!: PlatformOnShowWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlatformOnShowUpdateWithoutPlatformInput, {
    nullable: false
  })
  data!: PlatformOnShowUpdateWithoutPlatformInput;
}
