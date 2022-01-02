import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedOneWithoutPlatformsInput } from "../inputs/MovieCreateNestedOneWithoutPlatformsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnMovieCreateWithoutPlatformInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  price!: string;

  @TypeGraphQL.Field(_type => MovieCreateNestedOneWithoutPlatformsInput, {
    nullable: false
  })
  movie!: MovieCreateNestedOneWithoutPlatformsInput;
}
