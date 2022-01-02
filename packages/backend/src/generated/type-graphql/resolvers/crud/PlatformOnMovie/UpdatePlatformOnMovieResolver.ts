import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdatePlatformOnMovieArgs } from "./args/UpdatePlatformOnMovieArgs";
import { PlatformOnMovie } from "../../../models/PlatformOnMovie";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PlatformOnMovie)
export class UpdatePlatformOnMovieResolver {
  @TypeGraphQL.Mutation(_returns => PlatformOnMovie, {
    nullable: true
  })
  async updatePlatformOnMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdatePlatformOnMovieArgs): Promise<PlatformOnMovie | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).platformOnMovie.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
