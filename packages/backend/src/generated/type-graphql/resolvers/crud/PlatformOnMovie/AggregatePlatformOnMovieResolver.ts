import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePlatformOnMovieArgs } from "./args/AggregatePlatformOnMovieArgs";
import { PlatformOnMovie } from "../../../models/PlatformOnMovie";
import { AggregatePlatformOnMovie } from "../../outputs/AggregatePlatformOnMovie";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PlatformOnMovie)
export class AggregatePlatformOnMovieResolver {
  @TypeGraphQL.Query(_returns => AggregatePlatformOnMovie, {
    nullable: false
  })
  async aggregatePlatformOnMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePlatformOnMovieArgs): Promise<AggregatePlatformOnMovie> {
    return getPrismaFromContext(ctx).platformOnMovie.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
