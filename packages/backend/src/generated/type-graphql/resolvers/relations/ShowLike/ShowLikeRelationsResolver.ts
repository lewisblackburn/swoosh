import * as TypeGraphQL from "type-graphql";
import { Show } from "../../../models/Show";
import { ShowLike } from "../../../models/ShowLike";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ShowLike)
export class ShowLikeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() showLike: ShowLike, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).showLike.findUnique({
      where: {
        userId_showId: {
          userId: showLike.userId,
          showId: showLike.showId,
        },
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Show, {
    nullable: false
  })
  async show(@TypeGraphQL.Root() showLike: ShowLike, @TypeGraphQL.Ctx() ctx: any): Promise<Show> {
    return getPrismaFromContext(ctx).showLike.findUnique({
      where: {
        userId_showId: {
          userId: showLike.userId,
          showId: showLike.showId,
        },
      },
    }).show({});
  }
}
