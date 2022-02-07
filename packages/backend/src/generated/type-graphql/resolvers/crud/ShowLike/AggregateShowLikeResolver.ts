import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateShowLikeArgs } from "./args/AggregateShowLikeArgs";
import { ShowLike } from "../../../models/ShowLike";
import { AggregateShowLike } from "../../outputs/AggregateShowLike";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ShowLike)
export class AggregateShowLikeResolver {
  @TypeGraphQL.Query(_returns => AggregateShowLike, {
    nullable: false
  })
  async aggregateShowLike(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateShowLikeArgs): Promise<AggregateShowLike> {
    return getPrismaFromContext(ctx).showLike.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
