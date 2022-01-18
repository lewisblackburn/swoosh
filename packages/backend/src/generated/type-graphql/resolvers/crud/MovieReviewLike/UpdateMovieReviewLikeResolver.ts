import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateMovieReviewLikeArgs } from "./args/UpdateMovieReviewLikeArgs";
import { MovieReviewLike } from "../../../models/MovieReviewLike";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieReviewLike)
export class UpdateMovieReviewLikeResolver {
  @TypeGraphQL.Mutation(_returns => MovieReviewLike, {
    nullable: true
  })
  async updateMovieReviewLike(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateMovieReviewLikeArgs): Promise<MovieReviewLike | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).movieReviewLike.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
