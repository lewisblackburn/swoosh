import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieReviewLikeCreateInput } from "../../../inputs/MovieReviewLikeCreateInput";
import { MovieReviewLikeUpdateInput } from "../../../inputs/MovieReviewLikeUpdateInput";
import { MovieReviewLikeWhereUniqueInput } from "../../../inputs/MovieReviewLikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertMovieReviewLikeArgs {
  @TypeGraphQL.Field(_type => MovieReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: MovieReviewLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieReviewLikeCreateInput, {
    nullable: false
  })
  create!: MovieReviewLikeCreateInput;

  @TypeGraphQL.Field(_type => MovieReviewLikeUpdateInput, {
    nullable: false
  })
  update!: MovieReviewLikeUpdateInput;
}
