import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikeUserIdReviewUserIdReviewMovieIdCompoundUniqueInput } from "../inputs/MovieReviewLikeUserIdReviewUserIdReviewMovieIdCompoundUniqueInput";

@TypeGraphQL.InputType("MovieReviewLikeWhereUniqueInput", {
  isAbstract: true
})
export class MovieReviewLikeWhereUniqueInput {
  @TypeGraphQL.Field(_type => MovieReviewLikeUserIdReviewUserIdReviewMovieIdCompoundUniqueInput, {
    nullable: true
  })
  userId_reviewUserId_reviewMovieId?: MovieReviewLikeUserIdReviewUserIdReviewMovieIdCompoundUniqueInput | undefined;
}
