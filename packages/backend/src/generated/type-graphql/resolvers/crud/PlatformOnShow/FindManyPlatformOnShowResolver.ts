import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyPlatformOnShowArgs } from "./args/FindManyPlatformOnShowArgs";
import { PlatformOnShow } from "../../../models/PlatformOnShow";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PlatformOnShow)
export class FindManyPlatformOnShowResolver {
  @TypeGraphQL.Query(_returns => [PlatformOnShow], {
    nullable: false
  })
  async platformOnShows(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPlatformOnShowArgs): Promise<PlatformOnShow[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).platformOnShow.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
