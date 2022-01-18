import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformUpdateWithoutShowsInput } from "../inputs/PlatformUpdateWithoutShowsInput";
import { PlatformWhereUniqueInput } from "../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.InputType("PlatformUpdateWithWhereUniqueWithoutShowsInput", {
  isAbstract: true
})
export class PlatformUpdateWithWhereUniqueWithoutShowsInput {
  @TypeGraphQL.Field(_type => PlatformWhereUniqueInput, {
    nullable: false
  })
  where!: PlatformWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlatformUpdateWithoutShowsInput, {
    nullable: false
  })
  data!: PlatformUpdateWithoutShowsInput;
}
