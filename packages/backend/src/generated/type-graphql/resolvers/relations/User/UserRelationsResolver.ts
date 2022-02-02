import * as TypeGraphQL from "type-graphql";
import { BookReview } from "../../../models/BookReview";
import { BookReviewLike } from "../../../models/BookReviewLike";
import { Follows } from "../../../models/Follows";
import { MovieLike } from "../../../models/MovieLike";
import { MovieReview } from "../../../models/MovieReview";
import { MovieReviewLike } from "../../../models/MovieReviewLike";
import { Notification } from "../../../models/Notification";
import { ShowReview } from "../../../models/ShowReview";
import { ShowReviewLike } from "../../../models/ShowReviewLike";
import { SongReview } from "../../../models/SongReview";
import { SongReviewLike } from "../../../models/SongReviewLike";
import { User } from "../../../models/User";
import { Watchlist } from "../../../models/Watchlist";
import { UserBookReviewLikesArgs } from "./args/UserBookReviewLikesArgs";
import { UserBookReviewsArgs } from "./args/UserBookReviewsArgs";
import { UserFollowersArgs } from "./args/UserFollowersArgs";
import { UserFollowingArgs } from "./args/UserFollowingArgs";
import { UserLikedMovieReviewsArgs } from "./args/UserLikedMovieReviewsArgs";
import { UserLikedMoviesArgs } from "./args/UserLikedMoviesArgs";
import { UserMovieReviewsArgs } from "./args/UserMovieReviewsArgs";
import { UserNotificationsArgs } from "./args/UserNotificationsArgs";
import { UserShowReviewLikesArgs } from "./args/UserShowReviewLikesArgs";
import { UserShowReviewsArgs } from "./args/UserShowReviewsArgs";
import { UserSongReviewLikesArgs } from "./args/UserSongReviewLikesArgs";
import { UserSongReviewsArgs } from "./args/UserSongReviewsArgs";
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

  @TypeGraphQL.FieldResolver(_type => [MovieLike], {
    nullable: false
  })
  async likedMovies(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserLikedMoviesArgs): Promise<MovieLike[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).likedMovies(args);
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

  @TypeGraphQL.FieldResolver(_type => [ShowReview], {
    nullable: false
  })
  async showReviews(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserShowReviewsArgs): Promise<ShowReview[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).showReviews(args);
  }

  @TypeGraphQL.FieldResolver(_type => [ShowReviewLike], {
    nullable: false
  })
  async showReviewLikes(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserShowReviewLikesArgs): Promise<ShowReviewLike[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).showReviewLikes(args);
  }

  @TypeGraphQL.FieldResolver(_type => [BookReview], {
    nullable: false
  })
  async bookReviews(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserBookReviewsArgs): Promise<BookReview[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).bookReviews(args);
  }

  @TypeGraphQL.FieldResolver(_type => [BookReviewLike], {
    nullable: false
  })
  async bookReviewLikes(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserBookReviewLikesArgs): Promise<BookReviewLike[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).bookReviewLikes(args);
  }

  @TypeGraphQL.FieldResolver(_type => [SongReview], {
    nullable: false
  })
  async songReviews(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserSongReviewsArgs): Promise<SongReview[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).songReviews(args);
  }

  @TypeGraphQL.FieldResolver(_type => [SongReviewLike], {
    nullable: false
  })
  async songReviewLikes(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserSongReviewLikesArgs): Promise<SongReviewLike[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).songReviewLikes(args);
  }
}
