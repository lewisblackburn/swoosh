import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSongReviewArgs } from "./args/AggregateSongReviewArgs";
import { SongReview } from "../../../models/SongReview";
import { AggregateSongReview } from "../../outputs/AggregateSongReview";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SongReview)
export class AggregateSongReviewResolver {
  @TypeGraphQL.Query(_returns => AggregateSongReview, {
    nullable: false
  })
  async aggregateSongReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSongReviewArgs): Promise<AggregateSongReview> {
    return getPrismaFromContext(ctx).songReview.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
