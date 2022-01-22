import * as TypeGraphQL from "type-graphql";
import { ShowReview } from "../../../models/ShowReview";
import { ShowReviewLike } from "../../../models/ShowReviewLike";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ShowReviewLike)
export class ShowReviewLikeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => ShowReview, {
    nullable: false
  })
  async showReview(@TypeGraphQL.Root() showReviewLike: ShowReviewLike, @TypeGraphQL.Ctx() ctx: any): Promise<ShowReview> {
    return getPrismaFromContext(ctx).showReviewLike.findUnique({
      where: {
        userId_reviewUserId_reviewShowId: {
          userId: showReviewLike.userId,
          reviewUserId: showReviewLike.reviewUserId,
          reviewShowId: showReviewLike.reviewShowId,
        },
      },
    }).showReview({});
  }
}
