import * as TypeGraphQL from "type-graphql";
import { MovieReview } from "../../../models/MovieReview";
import { MovieReviewLike } from "../../../models/MovieReviewLike";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieReviewLike)
export class MovieReviewLikeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() movieReviewLike: MovieReviewLike, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).movieReviewLike.findUnique({
      where: {
        userId_reviewUserId_reviewMovieId: {
          userId: movieReviewLike.userId,
          reviewUserId: movieReviewLike.reviewUserId,
          reviewMovieId: movieReviewLike.reviewMovieId,
        },
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => MovieReview, {
    nullable: false
  })
  async movieReview(@TypeGraphQL.Root() movieReviewLike: MovieReviewLike, @TypeGraphQL.Ctx() ctx: any): Promise<MovieReview> {
    return getPrismaFromContext(ctx).movieReviewLike.findUnique({
      where: {
        userId_reviewUserId_reviewMovieId: {
          userId: movieReviewLike.userId,
          reviewUserId: movieReviewLike.reviewUserId,
          reviewMovieId: movieReviewLike.reviewMovieId,
        },
      },
    }).movieReview({});
  }
}
