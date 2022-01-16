import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateWatchlistArgs } from "./args/AggregateWatchlistArgs";
import { Watchlist } from "../../../models/Watchlist";
import { AggregateWatchlist } from "../../outputs/AggregateWatchlist";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Watchlist)
export class AggregateWatchlistResolver {
  @TypeGraphQL.Query(_returns => AggregateWatchlist, {
    nullable: false
  })
  async aggregateWatchlist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWatchlistArgs): Promise<AggregateWatchlist> {
    return getPrismaFromContext(ctx).watchlist.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
