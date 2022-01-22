import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSongReviewLikeArgs } from "./args/AggregateSongReviewLikeArgs";
import { SongReviewLike } from "../../../models/SongReviewLike";
import { AggregateSongReviewLike } from "../../outputs/AggregateSongReviewLike";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SongReviewLike)
export class AggregateSongReviewLikeResolver {
  @TypeGraphQL.Query(_returns => AggregateSongReviewLike, {
    nullable: false
  })
  async aggregateSongReviewLike(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSongReviewLikeArgs): Promise<AggregateSongReviewLike> {
    return getPrismaFromContext(ctx).songReviewLike.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
