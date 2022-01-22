import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateShowReviewLikeArgs } from "./args/CreateShowReviewLikeArgs";
import { ShowReviewLike } from "../../../models/ShowReviewLike";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ShowReviewLike)
export class CreateShowReviewLikeResolver {
  @TypeGraphQL.Mutation(_returns => ShowReviewLike, {
    nullable: false
  })
  async createShowReviewLike(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateShowReviewLikeArgs): Promise<ShowReviewLike> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).showReviewLike.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
