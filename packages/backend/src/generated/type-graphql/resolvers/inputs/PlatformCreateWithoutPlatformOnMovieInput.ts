import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformOnShowCreateNestedManyWithoutPlatformInput } from "../inputs/PlatformOnShowCreateNestedManyWithoutPlatformInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformCreateWithoutPlatformOnMovieInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => PlatformOnShowCreateNestedManyWithoutPlatformInput, {
    nullable: true
  })
  PlatformOnShow?: PlatformOnShowCreateNestedManyWithoutPlatformInput | undefined;
}
