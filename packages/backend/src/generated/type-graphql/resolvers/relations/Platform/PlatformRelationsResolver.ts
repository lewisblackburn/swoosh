import * as TypeGraphQL from "type-graphql";
import { Platform } from "../../../models/Platform";
import { PlatformOnMovie } from "../../../models/PlatformOnMovie";
import { PlatformOnShow } from "../../../models/PlatformOnShow";
import { PlatformPlatformOnMovieArgs } from "./args/PlatformPlatformOnMovieArgs";
import { PlatformPlatformOnShowArgs } from "./args/PlatformPlatformOnShowArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Platform)
export class PlatformRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [PlatformOnMovie], {
    nullable: false
  })
  async PlatformOnMovie(@TypeGraphQL.Root() platform: Platform, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PlatformPlatformOnMovieArgs): Promise<PlatformOnMovie[]> {
    return getPrismaFromContext(ctx).platform.findUnique({
      where: {
        id: platform.id,
      },
    }).PlatformOnMovie(args);
  }

  @TypeGraphQL.FieldResolver(_type => [PlatformOnShow], {
    nullable: false
  })
  async PlatformOnShow(@TypeGraphQL.Root() platform: Platform, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PlatformPlatformOnShowArgs): Promise<PlatformOnShow[]> {
    return getPrismaFromContext(ctx).platform.findUnique({
      where: {
        id: platform.id,
      },
    }).PlatformOnShow(args);
  }
}
