import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertBookReviewLikeArgs } from "./args/UpsertBookReviewLikeArgs";
import { BookReviewLike } from "../../../models/BookReviewLike";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookReviewLike)
export class UpsertBookReviewLikeResolver {
  @TypeGraphQL.Mutation(_returns => BookReviewLike, {
    nullable: false
  })
  async upsertBookReviewLike(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertBookReviewLikeArgs): Promise<BookReviewLike> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).bookReviewLike.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
