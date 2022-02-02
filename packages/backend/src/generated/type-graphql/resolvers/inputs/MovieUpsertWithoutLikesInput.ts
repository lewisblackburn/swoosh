import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutLikesInput } from "../inputs/MovieCreateWithoutLikesInput";
import { MovieUpdateWithoutLikesInput } from "../inputs/MovieUpdateWithoutLikesInput";

@TypeGraphQL.InputType("MovieUpsertWithoutLikesInput", {
  isAbstract: true
})
export class MovieUpsertWithoutLikesInput {
  @TypeGraphQL.Field(_type => MovieUpdateWithoutLikesInput, {
    nullable: false
  })
  update!: MovieUpdateWithoutLikesInput;

  @TypeGraphQL.Field(_type => MovieCreateWithoutLikesInput, {
    nullable: false
  })
  create!: MovieCreateWithoutLikesInput;
}
