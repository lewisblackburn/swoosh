import * as TypeGraphQL from "type-graphql";
import { BookReview } from "../../../models/BookReview";
import { BookReviewLike } from "../../../models/BookReviewLike";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookReviewLike)
export class BookReviewLikeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() bookReviewLike: BookReviewLike, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).bookReviewLike.findUnique({
      where: {
        userId_reviewUserId_reviewBookId: {
          userId: bookReviewLike.userId,
          reviewUserId: bookReviewLike.reviewUserId,
          reviewBookId: bookReviewLike.reviewBookId,
        },
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => BookReview, {
    nullable: false
  })
  async bookReview(@TypeGraphQL.Root() bookReviewLike: BookReviewLike, @TypeGraphQL.Ctx() ctx: any): Promise<BookReview> {
    return getPrismaFromContext(ctx).bookReviewLike.findUnique({
      where: {
        userId_reviewUserId_reviewBookId: {
          userId: bookReviewLike.userId,
          reviewUserId: bookReviewLike.reviewUserId,
          reviewBookId: bookReviewLike.reviewBookId,
        },
      },
    }).bookReview({});
  }
}
