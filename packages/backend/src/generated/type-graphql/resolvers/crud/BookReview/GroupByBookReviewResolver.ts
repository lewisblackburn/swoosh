import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByBookReviewArgs } from "./args/GroupByBookReviewArgs";
import { BookReview } from "../../../models/BookReview";
import { BookReviewGroupBy } from "../../outputs/BookReviewGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookReview)
export class GroupByBookReviewResolver {
  @TypeGraphQL.Query(_returns => [BookReviewGroupBy], {
    nullable: false
  })
  async groupByBookReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByBookReviewArgs): Promise<BookReviewGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).bookReview.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
