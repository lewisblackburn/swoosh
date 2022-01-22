import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyBookReviewLikeArgs } from "./args/FindManyBookReviewLikeArgs";
import { BookReviewLike } from "../../../models/BookReviewLike";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookReviewLike)
export class FindManyBookReviewLikeResolver {
  @TypeGraphQL.Query(_returns => [BookReviewLike], {
    nullable: false
  })
  async bookReviewLikes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyBookReviewLikeArgs): Promise<BookReviewLike[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).bookReviewLike.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
