import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstWatchlistArgs } from "./args/FindFirstWatchlistArgs";
import { Watchlist } from "../../../models/Watchlist";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Watchlist)
export class FindFirstWatchlistResolver {
  @TypeGraphQL.Query(_returns => Watchlist, {
    nullable: true
  })
  async findFirstWatchlist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstWatchlistArgs): Promise<Watchlist | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).watchlist.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
