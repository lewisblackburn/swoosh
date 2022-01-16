import * as TypeGraphQL from "type-graphql";
import { Favourite } from "../../../models/Favourite";
import { Follows } from "../../../models/Follows";
import { Notification } from "../../../models/Notification";
import { Review } from "../../../models/Review";
import { User } from "../../../models/User";
import { Vote } from "../../../models/Vote";
import { Watchlist } from "../../../models/Watchlist";
import { UserFollowersArgs } from "./args/UserFollowersArgs";
import { UserFollowingArgs } from "./args/UserFollowingArgs";
import { UserNotificationsArgs } from "./args/UserNotificationsArgs";
import { UserReviewsArgs } from "./args/UserReviewsArgs";
import { UserVoteArgs } from "./args/UserVoteArgs";
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

  @TypeGraphQL.FieldResolver(_type => Favourite, {
    nullable: true
  })
  async favourites(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<Favourite | null> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).favourites({});
  }

  @TypeGraphQL.FieldResolver(_type => [Review], {
    nullable: false
  })
  async reviews(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserReviewsArgs): Promise<Review[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).reviews(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Vote], {
    nullable: false
  })
  async Vote(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserVoteArgs): Promise<Vote[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).Vote(args);
  }
}
