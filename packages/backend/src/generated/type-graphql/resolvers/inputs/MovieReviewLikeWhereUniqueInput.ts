import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikeUserIdMovieReviewIdCompoundUniqueInput } from "../inputs/MovieReviewLikeUserIdMovieReviewIdCompoundUniqueInput";

@TypeGraphQL.InputType("MovieReviewLikeWhereUniqueInput", {
  isAbstract: true
})
export class MovieReviewLikeWhereUniqueInput {
  @TypeGraphQL.Field(_type => MovieReviewLikeUserIdMovieReviewIdCompoundUniqueInput, {
    nullable: true
  })
  userId_movieReviewId?: MovieReviewLikeUserIdMovieReviewIdCompoundUniqueInput | undefined;
}
