import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikeUpdateWithoutMovieReviewInput } from "../inputs/MovieReviewLikeUpdateWithoutMovieReviewInput";
import { MovieReviewLikeWhereUniqueInput } from "../inputs/MovieReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewLikeUpdateWithWhereUniqueWithoutMovieReviewInput", {
  isAbstract: true
})
export class MovieReviewLikeUpdateWithWhereUniqueWithoutMovieReviewInput {
  @TypeGraphQL.Field(_type => MovieReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: MovieReviewLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieReviewLikeUpdateWithoutMovieReviewInput, {
    nullable: false
  })
  data!: MovieReviewLikeUpdateWithoutMovieReviewInput;
}
