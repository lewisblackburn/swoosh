import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikeCreateWithoutMovieReviewInput } from "../inputs/MovieReviewLikeCreateWithoutMovieReviewInput";
import { MovieReviewLikeWhereUniqueInput } from "../inputs/MovieReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewLikeCreateOrConnectWithoutMovieReviewInput", {
  isAbstract: true
})
export class MovieReviewLikeCreateOrConnectWithoutMovieReviewInput {
  @TypeGraphQL.Field(_type => MovieReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: MovieReviewLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieReviewLikeCreateWithoutMovieReviewInput, {
    nullable: false
  })
  create!: MovieReviewLikeCreateWithoutMovieReviewInput;
}
