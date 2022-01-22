import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertSongReviewLikeArgs } from "./args/UpsertSongReviewLikeArgs";
import { SongReviewLike } from "../../../models/SongReviewLike";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SongReviewLike)
export class UpsertSongReviewLikeResolver {
  @TypeGraphQL.Mutation(_returns => SongReviewLike, {
    nullable: false
  })
  async upsertSongReviewLike(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertSongReviewLikeArgs): Promise<SongReviewLike> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).songReviewLike.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
