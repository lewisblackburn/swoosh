import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutReviewInput } from "../inputs/MovieCreateWithoutReviewInput";
import { MovieUpdateWithoutReviewInput } from "../inputs/MovieUpdateWithoutReviewInput";

@TypeGraphQL.InputType("MovieUpsertWithoutReviewInput", {
  isAbstract: true
})
export class MovieUpsertWithoutReviewInput {
  @TypeGraphQL.Field(_type => MovieUpdateWithoutReviewInput, {
    nullable: false
  })
  update!: MovieUpdateWithoutReviewInput;

  @TypeGraphQL.Field(_type => MovieCreateWithoutReviewInput, {
    nullable: false
  })
  create!: MovieCreateWithoutReviewInput;
}
