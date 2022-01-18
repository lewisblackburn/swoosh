import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedOneWithoutReviewInput } from "../inputs/MovieCreateNestedOneWithoutReviewInput";
import { MovieReviewLikeCreateNestedManyWithoutMovieReviewInput } from "../inputs/MovieReviewLikeCreateNestedManyWithoutMovieReviewInput";

@TypeGraphQL.InputType("MovieReviewCreateWithoutUserInput", {
  isAbstract: true
})
export class MovieReviewCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | undefined;

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

  @TypeGraphQL.Field(_type => MovieCreateNestedOneWithoutReviewInput, {
    nullable: true
  })
  Movie?: MovieCreateNestedOneWithoutReviewInput | undefined;
}
