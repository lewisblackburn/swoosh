import * as TypeGraphQL from "type-graphql";
import { Follows } from "../../../models/Follows";
import { MovieReview } from "../../../models/MovieReview";
import { MovieReviewLike } from "../../../models/MovieReviewLike";
import { Notification } from "../../../models/Notification";
import { User } from "../../../models/User";
import { Watchlist } from "../../../models/Watchlist";
import { UserFollowersArgs } from "./args/UserFollowersArgs";
import { UserFollowingArgs } from "./args/UserFollowingArgs";
import { UserLikedMovieReviewsArgs } from "./args/UserLikedMovieReviewsArgs";
import { UserMovieReviewsArgs } from "./args/UserMovieReviewsArgs";
import { UserNotificationsArgs } from "./args/UserNotificationsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Follows], {
    nullable: false
  })
  async following(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFollowingArgs): Promise<Follows[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).following(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Follows], {
    nullable: false
  })
  async followers(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFollowersArgs): Promise<Follows[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).followers(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Notification], {
    nullable: false
  })
  async notifications(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserNotificationsArgs): Promise<Notification[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).notifications(args);
  }

  @TypeGraphQL.FieldResolver(_type => Watchlist, {
    nullable: true
  })
  async watchlist(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<Watchlist | null> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).watchlist({});
  }

  @TypeGraphQL.FieldResolver(_type => [MovieReview], {
    nullable: false
  })
  async movieReviews(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserMovieReviewsArgs): Promise<MovieReview[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).movieReviews(args);
  }

  @TypeGraphQL.FieldResolver(_type => [MovieReviewLike], {
    nullable: false
  })
  async likedMovieReviews(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserLikedMovieReviewsArgs): Promise<MovieReviewLike[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).likedMovieReviews(args);
  }
}
