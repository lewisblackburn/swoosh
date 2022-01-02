import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSongInMovieArgs } from "./args/AggregateSongInMovieArgs";
import { SongInMovie } from "../../../models/SongInMovie";
import { AggregateSongInMovie } from "../../outputs/AggregateSongInMovie";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SongInMovie)
export class AggregateSongInMovieResolver {
  @TypeGraphQL.Query(_returns => AggregateSongInMovie, {
    nullable: false
  })
  async aggregateSongInMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSongInMovieArgs): Promise<AggregateSongInMovie> {
    return getPrismaFromContext(ctx).songInMovie.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
