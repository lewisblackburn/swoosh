import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateBookReviewArgs } from "./args/AggregateBookReviewArgs";
import { BookReview } from "../../../models/BookReview";
import { AggregateBookReview } from "../../outputs/AggregateBookReview";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookReview)
export class AggregateBookReviewResolver {
  @TypeGraphQL.Query(_returns => AggregateBookReview, {
    nullable: false
  })
  async aggregateBookReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBookReviewArgs): Promise<AggregateBookReview> {
    return getPrismaFromContext(ctx).bookReview.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
