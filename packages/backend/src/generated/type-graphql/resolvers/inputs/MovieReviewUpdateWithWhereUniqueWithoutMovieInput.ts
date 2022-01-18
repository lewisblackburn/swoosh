import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewUpdateWithoutMovieInput } from "../inputs/MovieReviewUpdateWithoutMovieInput";
import { MovieReviewWhereUniqueInput } from "../inputs/MovieReviewWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewUpdateWithWhereUniqueWithoutMovieInput", {
  isAbstract: true
})
export class MovieReviewUpdateWithWhereUniqueWithoutMovieInput {
  @TypeGraphQL.Field(_type => MovieReviewWhereUniqueInput, {
    nullable: false
  })
  where!: MovieReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieReviewUpdateWithoutMovieInput, {
    nullable: false
  })
  data!: MovieReviewUpdateWithoutMovieInput;
}
