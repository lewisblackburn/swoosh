import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByMovieLikeArgs } from "./args/GroupByMovieLikeArgs";
import { MovieLike } from "../../../models/MovieLike";
import { MovieLikeGroupBy } from "../../outputs/MovieLikeGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieLike)
export class GroupByMovieLikeResolver {
  @TypeGraphQL.Query(_returns => [MovieLikeGroupBy], {
    nullable: false
  })
  async groupByMovieLike(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMovieLikeArgs): Promise<MovieLikeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).movieLike.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
