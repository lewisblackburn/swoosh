import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteSongInMovieArgs } from "./args/DeleteSongInMovieArgs";
import { SongInMovie } from "../../../models/SongInMovie";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SongInMovie)
export class DeleteSongInMovieResolver {
  @TypeGraphQL.Mutation(_returns => SongInMovie, {
    nullable: true
  })
  async deleteSongInMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteSongInMovieArgs): Promise<SongInMovie | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).songInMovie.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
