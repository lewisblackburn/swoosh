import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMovieReviewLikeArgs } from "./args/AggregateMovieReviewLikeArgs";
import { MovieReviewLike } from "../../../models/MovieReviewLike";
import { AggregateMovieReviewLike } from "../../outputs/AggregateMovieReviewLike";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieReviewLike)
export class AggregateMovieReviewLikeResolver {
  @TypeGraphQL.Query(_returns => AggregateMovieReviewLike, {
    nullable: false
  })
  async aggregateMovieReviewLike(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMovieReviewLikeArgs): Promise<AggregateMovieReviewLike> {
    return getPrismaFromContext(ctx).movieReviewLike.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
