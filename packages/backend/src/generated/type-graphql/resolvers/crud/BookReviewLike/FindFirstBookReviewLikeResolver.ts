import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstBookReviewLikeArgs } from "./args/FindFirstBookReviewLikeArgs";
import { BookReviewLike } from "../../../models/BookReviewLike";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookReviewLike)
export class FindFirstBookReviewLikeResolver {
  @TypeGraphQL.Query(_returns => BookReviewLike, {
    nullable: true
  })
  async findFirstBookReviewLike(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstBookReviewLikeArgs): Promise<BookReviewLike | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).bookReviewLike.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
