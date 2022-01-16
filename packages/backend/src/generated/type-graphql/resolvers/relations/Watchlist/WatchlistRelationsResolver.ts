import * as TypeGraphQL from "type-graphql";
import { Movie } from "../../../models/Movie";
import { Show } from "../../../models/Show";
import { User } from "../../../models/User";
import { Watchlist } from "../../../models/Watchlist";
import { WatchlistMoviesArgs } from "./args/WatchlistMoviesArgs";
import { WatchlistShowsArgs } from "./args/WatchlistShowsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Watchlist)
export class WatchlistRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() watchlist: Watchlist, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).watchlist.findUnique({
      where: {
        id: watchlist.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => [Movie], {
    nullable: false
  })
  async movies(@TypeGraphQL.Root() watchlist: Watchlist, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: WatchlistMoviesArgs): Promise<Movie[]> {
    return getPrismaFromContext(ctx).watchlist.findUnique({
      where: {
        id: watchlist.id,
      },
    }).movies(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Show], {
    nullable: false
  })
  async shows(@TypeGraphQL.Root() watchlist: Watchlist, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: WatchlistShowsArgs): Promise<Show[]> {
    return getPrismaFromContext(ctx).watchlist.findUnique({
      where: {
        id: watchlist.id,
      },
    }).shows(args);
  }
}
