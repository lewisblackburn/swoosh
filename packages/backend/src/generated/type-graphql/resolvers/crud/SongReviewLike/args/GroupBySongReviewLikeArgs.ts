import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongReviewLikeOrderByWithAggregationInput } from "../../../inputs/SongReviewLikeOrderByWithAggregationInput";
import { SongReviewLikeScalarWhereWithAggregatesInput } from "../../../inputs/SongReviewLikeScalarWhereWithAggregatesInput";
import { SongReviewLikeWhereInput } from "../../../inputs/SongReviewLikeWhereInput";
import { SongReviewLikeScalarFieldEnum } from "../../../../enums/SongReviewLikeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySongReviewLikeArgs {
  @TypeGraphQL.Field(_type => SongReviewLikeWhereInput, {
    nullable: true
  })
  where?: SongReviewLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SongReviewLikeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SongReviewLikeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewLikeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"userId" | "reviewUserId" | "reviewSongId" | "createdAt">;

  @TypeGraphQL.Field(_type => SongReviewLikeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SongReviewLikeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
