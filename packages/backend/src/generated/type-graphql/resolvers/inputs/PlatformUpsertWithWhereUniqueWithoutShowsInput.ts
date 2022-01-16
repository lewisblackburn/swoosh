import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformCreateWithoutShowsInput } from "../inputs/PlatformCreateWithoutShowsInput";
import { PlatformUpdateWithoutShowsInput } from "../inputs/PlatformUpdateWithoutShowsInput";
import { PlatformWhereUniqueInput } from "../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformUpsertWithWhereUniqueWithoutShowsInput {
  @TypeGraphQL.Field(_type => PlatformWhereUniqueInput, {
    nullable: false
  })
  where!: PlatformWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlatformUpdateWithoutShowsInput, {
    nullable: false
  })
  update!: PlatformUpdateWithoutShowsInput;

  @TypeGraphQL.Field(_type => PlatformCreateWithoutShowsInput, {
    nullable: false
  })
  create!: PlatformCreateWithoutShowsInput;
}
