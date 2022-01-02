import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformCreateWithoutPlatformOnMovieInput } from "../inputs/PlatformCreateWithoutPlatformOnMovieInput";
import { PlatformWhereUniqueInput } from "../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformCreateOrConnectWithoutPlatformOnMovieInput {
  @TypeGraphQL.Field(_type => PlatformWhereUniqueInput, {
    nullable: false
  })
  where!: PlatformWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlatformCreateWithoutPlatformOnMovieInput, {
    nullable: false
  })
  create!: PlatformCreateWithoutPlatformOnMovieInput;
}
