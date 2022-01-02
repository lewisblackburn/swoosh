import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertPlatformOnShowArgs } from "./args/UpsertPlatformOnShowArgs";
import { PlatformOnShow } from "../../../models/PlatformOnShow";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PlatformOnShow)
export class UpsertPlatformOnShowResolver {
  @TypeGraphQL.Mutation(_returns => PlatformOnShow, {
    nullable: false
  })
  async upsertPlatformOnShow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertPlatformOnShowArgs): Promise<PlatformOnShow> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).platformOnShow.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
