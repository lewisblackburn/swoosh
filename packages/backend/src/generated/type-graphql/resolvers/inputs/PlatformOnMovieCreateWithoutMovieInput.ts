import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformCreateNestedOneWithoutPlatformOnMovieInput } from "../inputs/PlatformCreateNestedOneWithoutPlatformOnMovieInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnMovieCreateWithoutMovieInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  price!: string;

  @TypeGraphQL.Field(_type => PlatformCreateNestedOneWithoutPlatformOnMovieInput, {
    nullable: false
  })
  platform!: PlatformCreateNestedOneWithoutPlatformOnMovieInput;
}
