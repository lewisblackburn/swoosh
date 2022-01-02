import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutPlatformsInput } from "../inputs/MovieCreateWithoutPlatformsInput";
import { MovieUpdateWithoutPlatformsInput } from "../inputs/MovieUpdateWithoutPlatformsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieUpsertWithoutPlatformsInput {
  @TypeGraphQL.Field(_type => MovieUpdateWithoutPlatformsInput, {
    nullable: false
  })
  update!: MovieUpdateWithoutPlatformsInput;

  @TypeGraphQL.Field(_type => MovieCreateWithoutPlatformsInput, {
    nullable: false
  })
  create!: MovieCreateWithoutPlatformsInput;
}
