import * as TypeGraphQL from "type-graphql";
import { Follows } from "../../../models/Follows";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Follows)
export class FollowsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async following(@TypeGraphQL.Root() follows: Follows, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).follows.findUnique({
      where: {
        followerId_followingId: {
          followerId: follows.followerId,
          followingId: follows.followingId,
        },
      },
    }).following({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async follower(@TypeGraphQL.Root() follows: Follows, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).follows.findUnique({
      where: {
        followerId_followingId: {
          followerId: follows.followerId,
          followingId: follows.followingId,
        },
      },
    }).follower({});
  }
}
