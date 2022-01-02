import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByActorInShowArgs } from "./args/GroupByActorInShowArgs";
import { ActorInShow } from "../../../models/ActorInShow";
import { ActorInShowGroupBy } from "../../outputs/ActorInShowGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ActorInShow)
export class GroupByActorInShowResolver {
  @TypeGraphQL.Query(_returns => [ActorInShowGroupBy], {
    nullable: false
  })
  async groupByActorInShow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByActorInShowArgs): Promise<ActorInShowGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).actorInShow.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
