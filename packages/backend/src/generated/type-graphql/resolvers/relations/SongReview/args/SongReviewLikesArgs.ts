import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongReviewLikeOrderByWithRelationInput } from "../../../inputs/SongReviewLikeOrderByWithRelationInput";
import { SongReviewLikeWhereInput } from "../../../inputs/SongReviewLikeWhereInput";
import { SongReviewLikeWhereUniqueInput } from "../../../inputs/SongReviewLikeWhereUniqueInput";
import { SongReviewLikeScalarFieldEnum } from "../../../../enums/SongReviewLikeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class SongReviewLikesArgs {
  @TypeGraphQL.Field(_type => SongReviewLikeWhereInput, {
    nullable: true
  })
  where?: SongReviewLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SongReviewLikeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SongReviewLikeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SongReviewLikeWhereUniqueInput, {
    nullable: true
  })
  cursor?: SongReviewLikeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SongReviewLikeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"userId" | "reviewUserId" | "reviewSongId" | "createdAt"> | undefined;
}
