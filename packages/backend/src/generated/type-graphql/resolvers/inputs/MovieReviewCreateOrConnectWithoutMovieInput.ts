import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewCreateWithoutMovieInput } from "../inputs/MovieReviewCreateWithoutMovieInput";
import { MovieReviewWhereUniqueInput } from "../inputs/MovieReviewWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewCreateOrConnectWithoutMovieInput", {
  isAbstract: true
})
export class MovieReviewCreateOrConnectWithoutMovieInput {
  @TypeGraphQL.Field(_type => MovieReviewWhereUniqueInput, {
    nullable: false
  })
  where!: MovieReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieReviewCreateWithoutMovieInput, {
    nullable: false
  })
  create!: MovieReviewCreateWithoutMovieInput;
}
