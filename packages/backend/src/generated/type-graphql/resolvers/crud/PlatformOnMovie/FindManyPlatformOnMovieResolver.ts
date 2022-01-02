import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyPlatformOnMovieArgs } from "./args/FindManyPlatformOnMovieArgs";
import { PlatformOnMovie } from "../../../models/PlatformOnMovie";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PlatformOnMovie)
export class FindManyPlatformOnMovieResolver {
  @TypeGraphQL.Query(_returns => [PlatformOnMovie], {
    nullable: false
  })
  async platformOnMovies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPlatformOnMovieArgs): Promise<PlatformOnMovie[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).platformOnMovie.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
