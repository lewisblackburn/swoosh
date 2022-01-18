import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikeCreateWithoutMovieReviewInput } from "../inputs/MovieReviewLikeCreateWithoutMovieReviewInput";
import { MovieReviewLikeUpdateWithoutMovieReviewInput } from "../inputs/MovieReviewLikeUpdateWithoutMovieReviewInput";
import { MovieReviewLikeWhereUniqueInput } from "../inputs/MovieReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewLikeUpsertWithWhereUniqueWithoutMovieReviewInput", {
  isAbstract: true
})
export class MovieReviewLikeUpsertWithWhereUniqueWithoutMovieReviewInput {
  @TypeGraphQL.Field(_type => MovieReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: MovieReviewLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieReviewLikeUpdateWithoutMovieReviewInput, {
    nullable: false
  })
  update!: MovieReviewLikeUpdateWithoutMovieReviewInput;

  @TypeGraphQL.Field(_type => MovieReviewLikeCreateWithoutMovieReviewInput, {
    nullable: false
  })
  create!: MovieReviewLikeCreateWithoutMovieReviewInput;
}
