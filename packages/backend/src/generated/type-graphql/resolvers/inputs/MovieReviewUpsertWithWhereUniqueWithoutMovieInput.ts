import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewCreateWithoutMovieInput } from "../inputs/MovieReviewCreateWithoutMovieInput";
import { MovieReviewUpdateWithoutMovieInput } from "../inputs/MovieReviewUpdateWithoutMovieInput";
import { MovieReviewWhereUniqueInput } from "../inputs/MovieReviewWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewUpsertWithWhereUniqueWithoutMovieInput", {
  isAbstract: true
})
export class MovieReviewUpsertWithWhereUniqueWithoutMovieInput {
  @TypeGraphQL.Field(_type => MovieReviewWhereUniqueInput, {
    nullable: false
  })
  where!: MovieReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieReviewUpdateWithoutMovieInput, {
    nullable: false
  })
  update!: MovieReviewUpdateWithoutMovieInput;

  @TypeGraphQL.Field(_type => MovieReviewCreateWithoutMovieInput, {
    nullable: false
  })
  create!: MovieReviewCreateWithoutMovieInput;
}
