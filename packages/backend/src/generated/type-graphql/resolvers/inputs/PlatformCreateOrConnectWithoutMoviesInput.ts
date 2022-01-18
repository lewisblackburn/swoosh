import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformCreateWithoutMoviesInput } from "../inputs/PlatformCreateWithoutMoviesInput";
import { PlatformWhereUniqueInput } from "../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.InputType("PlatformCreateOrConnectWithoutMoviesInput", {
  isAbstract: true
})
export class PlatformCreateOrConnectWithoutMoviesInput {
  @TypeGraphQL.Field(_type => PlatformWhereUniqueInput, {
    nullable: false
  })
  where!: PlatformWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlatformCreateWithoutMoviesInput, {
    nullable: false
  })
  create!: PlatformCreateWithoutMoviesInput;
}
