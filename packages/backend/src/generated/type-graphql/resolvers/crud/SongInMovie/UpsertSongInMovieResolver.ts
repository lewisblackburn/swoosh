import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertSongInMovieArgs } from "./args/UpsertSongInMovieArgs";
import { SongInMovie } from "../../../models/SongInMovie";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SongInMovie)
export class UpsertSongInMovieResolver {
  @TypeGraphQL.Mutation(_returns => SongInMovie, {
    nullable: false
  })
  async upsertSongInMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertSongInMovieArgs): Promise<SongInMovie> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).songInMovie.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
