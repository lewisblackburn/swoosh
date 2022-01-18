import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieReviewLikeWhereInput } from "../../../inputs/MovieReviewLikeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMovieReviewLikeArgs {
  @TypeGraphQL.Field(_type => MovieReviewLikeWhereInput, {
    nullable: true
  })
  where?: MovieReviewLikeWhereInput | undefined;
}
