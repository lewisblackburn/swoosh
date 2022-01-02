import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformCreateWithoutPlatformOnMovieInput } from "../inputs/PlatformCreateWithoutPlatformOnMovieInput";
import { PlatformUpdateWithoutPlatformOnMovieInput } from "../inputs/PlatformUpdateWithoutPlatformOnMovieInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformUpsertWithoutPlatformOnMovieInput {
  @TypeGraphQL.Field(_type => PlatformUpdateWithoutPlatformOnMovieInput, {
    nullable: false
  })
  update!: PlatformUpdateWithoutPlatformOnMovieInput;

  @TypeGraphQL.Field(_type => PlatformCreateWithoutPlatformOnMovieInput, {
    nullable: false
  })
  create!: PlatformCreateWithoutPlatformOnMovieInput;
}
