import * as TypeGraphQL from "type-graphql";
import { ActorInShow } from "../../../models/ActorInShow";
import { Favourite } from "../../../models/Favourite";
import { Genre } from "../../../models/Genre";
import { Platform } from "../../../models/Platform";
import { Rating } from "../../../models/Rating";
import { Review } from "../../../models/Review";
import { Show } from "../../../models/Show";
import { SongInShow } from "../../../models/SongInShow";
import { Watchlist } from "../../../models/Watchlist";
import { ShowActorsArgs } from "./args/ShowActorsArgs";
import { ShowFavouriteArgs } from "./args/ShowFavouriteArgs";
import { ShowGenresArgs } from "./args/ShowGenresArgs";
import { ShowPlatformsArgs } from "./args/ShowPlatformsArgs";
import { ShowRatingArgs } from "./args/ShowRatingArgs";
import { ShowReviewsArgs } from "./args/ShowReviewsArgs";
import { ShowSoundtrackArgs } from "./args/ShowSoundtrackArgs";
import { ShowWatchlistArgs } from "./args/ShowWatchlistArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Show)
export class ShowRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Rating], {
    nullable: false
  })
  async rating(@TypeGraphQL.Root() show: Show, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ShowRatingArgs): Promise<Rating[]> {
    return getPrismaFromContext(ctx).show.findUnique({
      where: {
        id: show.id,
      },
    }).rating(args);
  }

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

  @TypeGraphQL.FieldResolver(_type => [Favourite], {
    nullable: false
  })
  async favourite(@TypeGraphQL.Root() show: Show, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ShowFavouriteArgs): Promise<Favourite[]> {
    return getPrismaFromContext(ctx).show.findUnique({
      where: {
        id: show.id,
      },
    }).favourite(args);
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

  @TypeGraphQL.FieldResolver(_type => [Review], {
    nullable: false
  })
  async reviews(@TypeGraphQL.Root() show: Show, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ShowReviewsArgs): Promise<Review[]> {
    return getPrismaFromContext(ctx).show.findUnique({
      where: {
        id: show.id,
      },
    }).reviews(args);
  }
}
