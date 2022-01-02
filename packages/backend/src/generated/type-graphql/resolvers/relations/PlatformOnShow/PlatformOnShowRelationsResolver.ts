import * as TypeGraphQL from "type-graphql";
import { Platform } from "../../../models/Platform";
import { PlatformOnShow } from "../../../models/PlatformOnShow";
import { Show } from "../../../models/Show";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PlatformOnShow)
export class PlatformOnShowRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Platform, {
    nullable: false
  })
  async platform(@TypeGraphQL.Root() platformOnShow: PlatformOnShow, @TypeGraphQL.Ctx() ctx: any): Promise<Platform> {
    return getPrismaFromContext(ctx).platformOnShow.findUnique({
      where: {
        platformId_showId: {
          platformId: platformOnShow.platformId,
          showId: platformOnShow.showId,
        },
      },
    }).platform({});
  }

  @TypeGraphQL.FieldResolver(_type => Show, {
    nullable: false
  })
  async show(@TypeGraphQL.Root() platformOnShow: PlatformOnShow, @TypeGraphQL.Ctx() ctx: any): Promise<Show> {
    return getPrismaFromContext(ctx).platformOnShow.findUnique({
      where: {
        platformId_showId: {
          platformId: platformOnShow.platformId,
          showId: platformOnShow.showId,
        },
      },
    }).show({});
  }
}
