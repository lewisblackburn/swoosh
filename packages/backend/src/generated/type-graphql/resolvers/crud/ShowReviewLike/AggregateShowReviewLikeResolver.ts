import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateShowReviewLikeArgs } from "./args/AggregateShowReviewLikeArgs";
import { ShowReviewLike } from "../../../models/ShowReviewLike";
import { AggregateShowReviewLike } from "../../outputs/AggregateShowReviewLike";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ShowReviewLike)
export class AggregateShowReviewLikeResolver {
  @TypeGraphQL.Query(_returns => AggregateShowReviewLike, {
    nullable: false
  })
  async aggregateShowReviewLike(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateShowReviewLikeArgs): Promise<AggregateShowReviewLike> {
    return getPrismaFromContext(ctx).showReviewLike.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
