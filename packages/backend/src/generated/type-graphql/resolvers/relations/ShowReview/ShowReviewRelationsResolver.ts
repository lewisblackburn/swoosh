import * as TypeGraphQL from "type-graphql";
import { Show } from "../../../models/Show";
import { ShowReview } from "../../../models/ShowReview";
import { ShowReviewLike } from "../../../models/ShowReviewLike";
import { User } from "../../../models/User";
import { ShowReviewLikesArgs } from "./args/ShowReviewLikesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ShowReview)
export class ShowReviewRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [ShowReviewLike], {
    nullable: false
  })
  async likes(@TypeGraphQL.Root() showReview: ShowReview, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ShowReviewLikesArgs): Promise<ShowReviewLike[]> {
    return getPrismaFromContext(ctx).showReview.findUnique({
      where: {
        userId_showId: {
          userId: showReview.userId,
          showId: showReview.showId,
        },
      },
    }).likes(args);
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() showReview: ShowReview, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).showReview.findUnique({
      where: {
        userId_showId: {
          userId: showReview.userId,
          showId: showReview.showId,
        },
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Show, {
    nullable: false
  })
  async show(@TypeGraphQL.Root() showReview: ShowReview, @TypeGraphQL.Ctx() ctx: any): Promise<Show> {
    return getPrismaFromContext(ctx).showReview.findUnique({
      where: {
        userId_showId: {
          userId: showReview.userId,
          showId: showReview.showId,
        },
      },
    }).show({});
  }
}
