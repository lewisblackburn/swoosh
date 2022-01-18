import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieReviewLikeUpdateManyMutationInput } from "../../../inputs/MovieReviewLikeUpdateManyMutationInput";
import { MovieReviewLikeWhereInput } from "../../../inputs/MovieReviewLikeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMovieReviewLikeArgs {
  @TypeGraphQL.Field(_type => MovieReviewLikeUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovieReviewLikeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MovieReviewLikeWhereInput, {
    nullable: true
  })
  where?: MovieReviewLikeWhereInput | undefined;
}
