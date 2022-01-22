import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewUserIdMovieIdCompoundUniqueInput } from "../inputs/MovieReviewUserIdMovieIdCompoundUniqueInput";

@TypeGraphQL.InputType("MovieReviewWhereUniqueInput", {
  isAbstract: true
})
export class MovieReviewWhereUniqueInput {
  @TypeGraphQL.Field(_type => MovieReviewUserIdMovieIdCompoundUniqueInput, {
    nullable: true
  })
  userId_movieId?: MovieReviewUserIdMovieIdCompoundUniqueInput | undefined;
}
