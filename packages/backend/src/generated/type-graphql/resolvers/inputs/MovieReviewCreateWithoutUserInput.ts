import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedOneWithoutReviewsInput } from "../inputs/MovieCreateNestedOneWithoutReviewsInput";
import { MovieReviewLikeCreateNestedManyWithoutMovieReviewInput } from "../inputs/MovieReviewLikeCreateNestedManyWithoutMovieReviewInput";

@TypeGraphQL.InputType("MovieReviewCreateWithoutUserInput", {
  isAbstract: true
})
export class MovieReviewCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  review?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rating!: number;

  @TypeGraphQL.Field(_type => MovieReviewLikeCreateNestedManyWithoutMovieReviewInput, {
    nullable: true
  })
  likes?: MovieReviewLikeCreateNestedManyWithoutMovieReviewInput | undefined;

  @TypeGraphQL.Field(_type => MovieCreateNestedOneWithoutReviewsInput, {
    nullable: false
  })
  movie!: MovieCreateNestedOneWithoutReviewsInput;
}
