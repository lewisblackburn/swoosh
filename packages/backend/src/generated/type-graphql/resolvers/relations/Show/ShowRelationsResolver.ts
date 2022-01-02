import * as TypeGraphQL from "type-graphql";
import { ActorInShow } from "../../../models/ActorInShow";
import { PlatformOnShow } from "../../../models/PlatformOnShow";
import { Show } from "../../../models/Show";
import { SongInShow } from "../../../models/SongInShow";
import { ShowActorsArgs } from "./args/ShowActorsArgs";
import { ShowPlatformsArgs } from "./args/ShowPlatformsArgs";
import { ShowSoundtrackArgs } from "./args/ShowSoundtrackArgs";
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

  @TypeGraphQL.FieldResolver(_type => [PlatformOnShow], {
    nullable: false
  })
  async platforms(@TypeGraphQL.Root() show: Show, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ShowPlatformsArgs): Promise<PlatformOnShow[]> {
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
}
