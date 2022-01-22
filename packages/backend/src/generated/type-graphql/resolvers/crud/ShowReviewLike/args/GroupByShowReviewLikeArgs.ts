import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowReviewLikeOrderByWithAggregationInput } from "../../../inputs/ShowReviewLikeOrderByWithAggregationInput";
import { ShowReviewLikeScalarWhereWithAggregatesInput } from "../../../inputs/ShowReviewLikeScalarWhereWithAggregatesInput";
import { ShowReviewLikeWhereInput } from "../../../inputs/ShowReviewLikeWhereInput";
import { ShowReviewLikeScalarFieldEnum } from "../../../../enums/ShowReviewLikeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByShowReviewLikeArgs {
  @TypeGraphQL.Field(_type => ShowReviewLikeWhereInput, {
    nullable: true
  })
  where?: ShowReviewLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewLikeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ShowReviewLikeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewLikeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"userId" | "reviewUserId" | "reviewShowId" | "createdAt">;

  @TypeGraphQL.Field(_type => ShowReviewLikeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ShowReviewLikeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
