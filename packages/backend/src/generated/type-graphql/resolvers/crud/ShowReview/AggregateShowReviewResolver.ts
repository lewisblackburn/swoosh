import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateShowReviewArgs } from "./args/AggregateShowReviewArgs";
import { ShowReview } from "../../../models/ShowReview";
import { AggregateShowReview } from "../../outputs/AggregateShowReview";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ShowReview)
export class AggregateShowReviewResolver {
  @TypeGraphQL.Query(_returns => AggregateShowReview, {
    nullable: false
  })
  async aggregateShowReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateShowReviewArgs): Promise<AggregateShowReview> {
    return getPrismaFromContext(ctx).showReview.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
