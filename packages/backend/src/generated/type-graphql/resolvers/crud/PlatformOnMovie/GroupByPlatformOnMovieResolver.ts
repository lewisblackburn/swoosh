import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByPlatformOnMovieArgs } from "./args/GroupByPlatformOnMovieArgs";
import { PlatformOnMovie } from "../../../models/PlatformOnMovie";
import { PlatformOnMovieGroupBy } from "../../outputs/PlatformOnMovieGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PlatformOnMovie)
export class GroupByPlatformOnMovieResolver {
  @TypeGraphQL.Query(_returns => [PlatformOnMovieGroupBy], {
    nullable: false
  })
  async groupByPlatformOnMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPlatformOnMovieArgs): Promise<PlatformOnMovieGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).platformOnMovie.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
