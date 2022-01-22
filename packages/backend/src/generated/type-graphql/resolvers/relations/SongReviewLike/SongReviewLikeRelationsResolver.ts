import * as TypeGraphQL from "type-graphql";
import { SongReview } from "../../../models/SongReview";
import { SongReviewLike } from "../../../models/SongReviewLike";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SongReviewLike)
export class SongReviewLikeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => SongReview, {
    nullable: false
  })
  async songReview(@TypeGraphQL.Root() songReviewLike: SongReviewLike, @TypeGraphQL.Ctx() ctx: any): Promise<SongReview> {
    return getPrismaFromContext(ctx).songReviewLike.findUnique({
      where: {
        userId_reviewUserId_reviewSongId: {
          userId: songReviewLike.userId,
          reviewUserId: songReviewLike.reviewUserId,
          reviewSongId: songReviewLike.reviewSongId,
        },
      },
    }).songReview({});
  }
}
