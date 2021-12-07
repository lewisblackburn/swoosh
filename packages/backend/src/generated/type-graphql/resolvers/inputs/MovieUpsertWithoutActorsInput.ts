import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutActorsInput } from "../inputs/MovieCreateWithoutActorsInput";
import { MovieUpdateWithoutActorsInput } from "../inputs/MovieUpdateWithoutActorsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieUpsertWithoutActorsInput {
  @TypeGraphQL.Field(_type => MovieUpdateWithoutActorsInput, {
    nullable: false
  })
  update!: MovieUpdateWithoutActorsInput;

  @TypeGraphQL.Field(_type => MovieCreateWithoutActorsInput, {
    nullable: false
  })
  create!: MovieCreateWithoutActorsInput;
}
