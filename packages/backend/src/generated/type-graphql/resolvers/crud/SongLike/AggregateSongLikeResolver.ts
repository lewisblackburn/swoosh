import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSongLikeArgs } from "./args/AggregateSongLikeArgs";
import { SongLike } from "../../../models/SongLike";
import { AggregateSongLike } from "../../outputs/AggregateSongLike";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SongLike)
export class AggregateSongLikeResolver {
  @TypeGraphQL.Query(_returns => AggregateSongLike, {
    nullable: false
  })
  async aggregateSongLike(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSongLikeArgs): Promise<AggregateSongLike> {
    return getPrismaFromContext(ctx).songLike.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
