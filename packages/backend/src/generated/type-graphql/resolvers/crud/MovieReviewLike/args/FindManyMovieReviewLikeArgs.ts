import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieReviewLikeOrderByWithRelationInput } from "../../../inputs/MovieReviewLikeOrderByWithRelationInput";
import { MovieReviewLikeWhereInput } from "../../../inputs/MovieReviewLikeWhereInput";
import { MovieReviewLikeWhereUniqueInput } from "../../../inputs/MovieReviewLikeWhereUniqueInput";
import { MovieReviewLikeScalarFieldEnum } from "../../../../enums/MovieReviewLikeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyMovieReviewLikeArgs {
  @TypeGraphQL.Field(_type => MovieReviewLikeWhereInput, {
    nullable: true
  })
  where?: MovieReviewLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MovieReviewLikeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikeWhereUniqueInput, {
    nullable: true
  })
  cursor?: MovieReviewLikeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"userId" | "movieReviewId"> | undefined;
}
