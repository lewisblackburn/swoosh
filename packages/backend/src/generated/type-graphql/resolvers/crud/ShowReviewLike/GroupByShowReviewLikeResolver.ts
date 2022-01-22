import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByShowReviewLikeArgs } from "./args/GroupByShowReviewLikeArgs";
import { ShowReviewLike } from "../../../models/ShowReviewLike";
import { ShowReviewLikeGroupBy } from "../../outputs/ShowReviewLikeGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ShowReviewLike)
export class GroupByShowReviewLikeResolver {
  @TypeGraphQL.Query(_returns => [ShowReviewLikeGroupBy], {
    nullable: false
  })
  async groupByShowReviewLike(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByShowReviewLikeArgs): Promise<ShowReviewLikeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).showReviewLike.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
