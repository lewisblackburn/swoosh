import * as TypeGraphQL from "type-graphql";
import { Review } from "../../../models/Review";
import { User } from "../../../models/User";
import { Vote } from "../../../models/Vote";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Vote)
export class VoteRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() vote: Vote, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).vote.findUnique({
      where: {
        userId_reviewId: {
          userId: vote.userId,
          reviewId: vote.reviewId,
        },
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Review, {
    nullable: false
  })
  async review(@TypeGraphQL.Root() vote: Vote, @TypeGraphQL.Ctx() ctx: any): Promise<Review> {
    return getPrismaFromContext(ctx).vote.findUnique({
      where: {
        userId_reviewId: {
          userId: vote.userId,
          reviewId: vote.reviewId,
        },
      },
    }).review({});
  }
}
