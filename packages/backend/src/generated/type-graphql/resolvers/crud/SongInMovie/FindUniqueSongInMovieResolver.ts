import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSongInMovieArgs } from "./args/FindUniqueSongInMovieArgs";
import { SongInMovie } from "../../../models/SongInMovie";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SongInMovie)
export class FindUniqueSongInMovieResolver {
  @TypeGraphQL.Query(_returns => SongInMovie, {
    nullable: true
  })
  async songInMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSongInMovieArgs): Promise<SongInMovie | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).songInMovie.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
