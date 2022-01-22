import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManySongReviewLikeArgs } from "./args/FindManySongReviewLikeArgs";
import { SongReviewLike } from "../../../models/SongReviewLike";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SongReviewLike)
export class FindManySongReviewLikeResolver {
  @TypeGraphQL.Query(_returns => [SongReviewLike], {
    nullable: false
  })
  async songReviewLikes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySongReviewLikeArgs): Promise<SongReviewLike[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).songReviewLike.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
