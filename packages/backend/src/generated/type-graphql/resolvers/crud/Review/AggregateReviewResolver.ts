import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateReviewArgs } from "./args/AggregateReviewArgs";
import { Review } from "../../../models/Review";
import { AggregateReview } from "../../outputs/AggregateReview";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Review)
export class AggregateReviewResolver {
  @TypeGraphQL.Query(_returns => AggregateReview, {
    nullable: false
  })
  async aggregateReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateReviewArgs): Promise<AggregateReview> {
    return getPrismaFromContext(ctx).review.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
