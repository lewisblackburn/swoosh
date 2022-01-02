import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePlatformOnShowArgs } from "./args/AggregatePlatformOnShowArgs";
import { PlatformOnShow } from "../../../models/PlatformOnShow";
import { AggregatePlatformOnShow } from "../../outputs/AggregatePlatformOnShow";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PlatformOnShow)
export class AggregatePlatformOnShowResolver {
  @TypeGraphQL.Query(_returns => AggregatePlatformOnShow, {
    nullable: false
  })
  async aggregatePlatformOnShow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePlatformOnShowArgs): Promise<AggregatePlatformOnShow> {
    return getPrismaFromContext(ctx).platformOnShow.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
