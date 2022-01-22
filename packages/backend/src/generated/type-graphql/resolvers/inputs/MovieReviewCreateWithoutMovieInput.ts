import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikeCreateNestedManyWithoutMovieReviewInput } from "../inputs/MovieReviewLikeCreateNestedManyWithoutMovieReviewInput";
import { UserCreateNestedOneWithoutMovieReviewsInput } from "../inputs/UserCreateNestedOneWithoutMovieReviewsInput";

@TypeGraphQL.InputType("MovieReviewCreateWithoutMovieInput", {
  isAbstract: true
})
export class MovieReviewCreateWithoutMovieInput {
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
}
