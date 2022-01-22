import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieReviewLikeOrderByWithAggregationInput } from "../../../inputs/MovieReviewLikeOrderByWithAggregationInput";
import { MovieReviewLikeScalarWhereWithAggregatesInput } from "../../../inputs/MovieReviewLikeScalarWhereWithAggregatesInput";
import { MovieReviewLikeWhereInput } from "../../../inputs/MovieReviewLikeWhereInput";
import { MovieReviewLikeScalarFieldEnum } from "../../../../enums/MovieReviewLikeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMovieReviewLikeArgs {
  @TypeGraphQL.Field(_type => MovieReviewLikeWhereInput, {
    nullable: true
  })
  where?: MovieReviewLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MovieReviewLikeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"userId" | "reviewUserId" | "reviewMovieId" | "createdAt">;

  @TypeGraphQL.Field(_type => MovieReviewLikeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MovieReviewLikeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
