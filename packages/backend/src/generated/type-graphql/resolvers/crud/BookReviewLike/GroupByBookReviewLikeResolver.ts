import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByBookReviewLikeArgs } from "./args/GroupByBookReviewLikeArgs";
import { BookReviewLike } from "../../../models/BookReviewLike";
import { BookReviewLikeGroupBy } from "../../outputs/BookReviewLikeGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookReviewLike)
export class GroupByBookReviewLikeResolver {
  @TypeGraphQL.Query(_returns => [BookReviewLikeGroupBy], {
    nullable: false
  })
  async groupByBookReviewLike(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByBookReviewLikeArgs): Promise<BookReviewLikeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).bookReviewLike.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
