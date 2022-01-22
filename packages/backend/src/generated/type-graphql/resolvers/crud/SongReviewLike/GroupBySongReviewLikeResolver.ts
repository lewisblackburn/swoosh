import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupBySongReviewLikeArgs } from "./args/GroupBySongReviewLikeArgs";
import { SongReviewLike } from "../../../models/SongReviewLike";
import { SongReviewLikeGroupBy } from "../../outputs/SongReviewLikeGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SongReviewLike)
export class GroupBySongReviewLikeResolver {
  @TypeGraphQL.Query(_returns => [SongReviewLikeGroupBy], {
    nullable: false
  })
  async groupBySongReviewLike(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySongReviewLikeArgs): Promise<SongReviewLikeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).songReviewLike.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
