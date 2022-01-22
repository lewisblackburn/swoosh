import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSongReviewLikeArgs } from "./args/FindUniqueSongReviewLikeArgs";
import { SongReviewLike } from "../../../models/SongReviewLike";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SongReviewLike)
export class FindUniqueSongReviewLikeResolver {
  @TypeGraphQL.Query(_returns => SongReviewLike, {
    nullable: true
  })
  async songReviewLike(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSongReviewLikeArgs): Promise<SongReviewLike | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).songReviewLike.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
