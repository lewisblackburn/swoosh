import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateWatchlistArgs } from "./args/CreateWatchlistArgs";
import { Watchlist } from "../../../models/Watchlist";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Watchlist)
export class CreateWatchlistResolver {
  @TypeGraphQL.Mutation(_returns => Watchlist, {
    nullable: false
  })
  async createWatchlist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateWatchlistArgs): Promise<Watchlist> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).watchlist.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
