import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedManyWithoutPlatformsInput } from "../inputs/MovieCreateNestedManyWithoutPlatformsInput";

@TypeGraphQL.InputType("PlatformCreateWithoutShowsInput", {
  isAbstract: true
})
export class PlatformCreateWithoutShowsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  apiKey!: string;

  @TypeGraphQL.Field(_type => MovieCreateNestedManyWithoutPlatformsInput, {
    nullable: true
  })
  movies?: MovieCreateNestedManyWithoutPlatformsInput | undefined;
}
