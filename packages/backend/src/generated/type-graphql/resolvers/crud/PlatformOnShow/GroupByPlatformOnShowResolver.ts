import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByPlatformOnShowArgs } from "./args/GroupByPlatformOnShowArgs";
import { PlatformOnShow } from "../../../models/PlatformOnShow";
import { PlatformOnShowGroupBy } from "../../outputs/PlatformOnShowGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PlatformOnShow)
export class GroupByPlatformOnShowResolver {
  @TypeGraphQL.Query(_returns => [PlatformOnShowGroupBy], {
    nullable: false
  })
  async groupByPlatformOnShow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPlatformOnShowArgs): Promise<PlatformOnShowGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).platformOnShow.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
