import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutPlatformsInput } from "../inputs/MovieCreateWithoutPlatformsInput";
import { MovieUpdateWithoutPlatformsInput } from "../inputs/MovieUpdateWithoutPlatformsInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieUpsertWithWhereUniqueWithoutPlatformsInput", {
  isAbstract: true
})
export class MovieUpsertWithWhereUniqueWithoutPlatformsInput {
  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieUpdateWithoutPlatformsInput, {
    nullable: false
  })
  update!: MovieUpdateWithoutPlatformsInput;

  @TypeGraphQL.Field(_type => MovieCreateWithoutPlatformsInput, {
    nullable: false
  })
  create!: MovieCreateWithoutPlatformsInput;
}
