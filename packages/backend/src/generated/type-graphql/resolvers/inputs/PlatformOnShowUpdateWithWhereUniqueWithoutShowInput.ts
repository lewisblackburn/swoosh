import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformOnShowUpdateWithoutShowInput } from "../inputs/PlatformOnShowUpdateWithoutShowInput";
import { PlatformOnShowWhereUniqueInput } from "../inputs/PlatformOnShowWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnShowUpdateWithWhereUniqueWithoutShowInput {
  @TypeGraphQL.Field(_type => PlatformOnShowWhereUniqueInput, {
    nullable: false
  })
  where!: PlatformOnShowWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlatformOnShowUpdateWithoutShowInput, {
    nullable: false
  })
  data!: PlatformOnShowUpdateWithoutShowInput;
}
