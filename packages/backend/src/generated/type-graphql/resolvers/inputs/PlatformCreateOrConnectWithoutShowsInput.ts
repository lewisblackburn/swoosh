import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformCreateWithoutShowsInput } from "../inputs/PlatformCreateWithoutShowsInput";
import { PlatformWhereUniqueInput } from "../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformCreateOrConnectWithoutShowsInput {
  @TypeGraphQL.Field(_type => PlatformWhereUniqueInput, {
    nullable: false
  })
  where!: PlatformWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlatformCreateWithoutShowsInput, {
    nullable: false
  })
  create!: PlatformCreateWithoutShowsInput;
}
