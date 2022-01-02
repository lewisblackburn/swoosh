import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSongInShowArgs } from "./args/AggregateSongInShowArgs";
import { SongInShow } from "../../../models/SongInShow";
import { AggregateSongInShow } from "../../outputs/AggregateSongInShow";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SongInShow)
export class AggregateSongInShowResolver {
  @TypeGraphQL.Query(_returns => AggregateSongInShow, {
    nullable: false
  })
  async aggregateSongInShow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSongInShowArgs): Promise<AggregateSongInShow> {
    return getPrismaFromContext(ctx).songInShow.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
