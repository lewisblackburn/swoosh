import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMovieReviewArgs } from "./args/AggregateMovieReviewArgs";
import { MovieReview } from "../../../models/MovieReview";
import { AggregateMovieReview } from "../../outputs/AggregateMovieReview";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieReview)
export class AggregateMovieReviewResolver {
  @TypeGraphQL.Query(_returns => AggregateMovieReview, {
    nullable: false
  })
  async aggregateMovieReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMovieReviewArgs): Promise<AggregateMovieReview> {
    return getPrismaFromContext(ctx).movieReview.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
