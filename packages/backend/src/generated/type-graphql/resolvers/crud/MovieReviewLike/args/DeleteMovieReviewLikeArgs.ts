import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieReviewLikeWhereUniqueInput } from "../../../inputs/MovieReviewLikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteMovieReviewLikeArgs {
  @TypeGraphQL.Field(_type => MovieReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: MovieReviewLikeWhereUniqueInput;
}
