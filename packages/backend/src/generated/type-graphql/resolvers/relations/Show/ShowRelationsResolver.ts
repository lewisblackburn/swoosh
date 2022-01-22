import * as TypeGraphQL from "type-graphql";
import { ActorInShow } from "../../../models/ActorInShow";
import { Genre } from "../../../models/Genre";
import { Platform } from "../../../models/Platform";
import { Show } from "../../../models/Show";
import { ShowReview } from "../../../models/ShowReview";
import { SongInShow } from "../../../models/SongInShow";
import { Watchlist } from "../../../models/Watchlist";
import { ShowActorsArgs } from "./args/ShowActorsArgs";
import { ShowGenresArgs } from "./args/ShowGenresArgs";
import { ShowPlatformsArgs } from "./args/ShowPlatformsArgs";
import { ShowReviewsArgs } from "./args/ShowReviewsArgs";
import { ShowSoundtrackArgs } from "./args/ShowSoundtrackArgs";
import { ShowWatchlistArgs } from "./args/ShowWatchlistArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Show)
export class ShowRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [ActorInShow], {
    nullable: false
  })
  async actors(@TypeGraphQL.Root() show: Show, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ShowActorsArgs): Promise<ActorInShow[]> {
    return getPrismaFromContext(ctx).show.findUnique({
      where: {
        id: show.id,
      },
    }).actors(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Genre], {
    nullable: false
  })
  async genres(@TypeGraphQL.Root() show: Show, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ShowGenresArgs): Promise<Genre[]> {
    return getPrismaFromContext(ctx).show.findUnique({
      where: {
        id: show.id,
      },
    }).genres(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Platform], {
    nullable: false
  })
  async platforms(@TypeGraphQL.Root() show: Show, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ShowPlatformsArgs): Promise<Platform[]> {
    return getPrismaFromContext(ctx).show.findUnique({
      where: {
        id: show.id,
      },
    }).platforms(args);
  }

  @TypeGraphQL.FieldResolver(_type => [SongInShow], {
    nullable: false
  })
  async soundtrack(@TypeGraphQL.Root() show: Show, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ShowSoundtrackArgs): Promise<SongInShow[]> {
    return getPrismaFromContext(ctx).show.findUnique({
      where: {
        id: show.id,
      },
    }).soundtrack(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Watchlist], {
    nullable: false
  })
  async watchlist(@TypeGraphQL.Root() show: Show, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ShowWatchlistArgs): Promise<Watchlist[]> {
    return getPrismaFromContext(ctx).show.findUnique({
      where: {
        id: show.id,
      },
    }).watchlist(args);
  }

  @TypeGraphQL.FieldResolver(_type => [ShowReview], {
    nullable: false
  })
  async reviews(@TypeGraphQL.Root() show: Show, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ShowReviewsArgs): Promise<ShowReview[]> {
    return getPrismaFromContext(ctx).show.findUnique({
      where: {
        id: show.id,
      },
    }).reviews(args);
  }
}
