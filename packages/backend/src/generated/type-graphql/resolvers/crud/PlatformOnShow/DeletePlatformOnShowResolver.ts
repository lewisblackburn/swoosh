import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeletePlatformOnShowArgs } from "./args/DeletePlatformOnShowArgs";
import { PlatformOnShow } from "../../../models/PlatformOnShow";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PlatformOnShow)
export class DeletePlatformOnShowResolver {
  @TypeGraphQL.Mutation(_returns => PlatformOnShow, {
    nullable: true
  })
  async deletePlatformOnShow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeletePlatformOnShowArgs): Promise<PlatformOnShow | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).platformOnShow.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
