import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateBookReviewLikeArgs } from "./args/AggregateBookReviewLikeArgs";
import { BookReviewLike } from "../../../models/BookReviewLike";
import { AggregateBookReviewLike } from "../../outputs/AggregateBookReviewLike";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookReviewLike)
export class AggregateBookReviewLikeResolver {
  @TypeGraphQL.Query(_returns => AggregateBookReviewLike, {
    nullable: false
  })
  async aggregateBookReviewLike(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBookReviewLikeArgs): Promise<AggregateBookReviewLike> {
    return getPrismaFromContext(ctx).bookReviewLike.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
