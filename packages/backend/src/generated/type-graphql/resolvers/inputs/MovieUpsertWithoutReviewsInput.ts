import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutReviewsInput } from "../inputs/MovieCreateWithoutReviewsInput";
import { MovieUpdateWithoutReviewsInput } from "../inputs/MovieUpdateWithoutReviewsInput";

@TypeGraphQL.InputType("MovieUpsertWithoutReviewsInput", {
  isAbstract: true
})
export class MovieUpsertWithoutReviewsInput {
  @TypeGraphQL.Field(_type => MovieUpdateWithoutReviewsInput, {
    nullable: false
  })
  update!: MovieUpdateWithoutReviewsInput;

  @TypeGraphQL.Field(_type => MovieCreateWithoutReviewsInput, {
    nullable: false
  })
  create!: MovieCreateWithoutReviewsInput;
}
