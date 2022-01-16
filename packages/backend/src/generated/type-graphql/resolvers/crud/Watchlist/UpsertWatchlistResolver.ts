import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertWatchlistArgs } from "./args/UpsertWatchlistArgs";
import { Watchlist } from "../../../models/Watchlist";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Watchlist)
export class UpsertWatchlistResolver {
  @TypeGraphQL.Mutation(_returns => Watchlist, {
    nullable: false
  })
  async upsertWatchlist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertWatchlistArgs): Promise<Watchlist> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).watchlist.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
