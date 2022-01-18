import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutPlatformsInput } from "../inputs/MovieCreateWithoutPlatformsInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieCreateOrConnectWithoutPlatformsInput", {
  isAbstract: true
})
export class MovieCreateOrConnectWithoutPlatformsInput {
  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieCreateWithoutPlatformsInput, {
    nullable: false
  })
  create!: MovieCreateWithoutPlatformsInput;
}
