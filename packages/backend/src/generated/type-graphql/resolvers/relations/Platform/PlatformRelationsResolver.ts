import * as TypeGraphQL from "type-graphql";
import { Movie } from "../../../models/Movie";
import { Platform } from "../../../models/Platform";
import { Show } from "../../../models/Show";
import { PlatformMoviesArgs } from "./args/PlatformMoviesArgs";
import { PlatformShowsArgs } from "./args/PlatformShowsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Platform)
export class PlatformRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Show], {
    nullable: false
  })
  async shows(@TypeGraphQL.Root() platform: Platform, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PlatformShowsArgs): Promise<Show[]> {
    return getPrismaFromContext(ctx).platform.findUnique({
      where: {
        id: platform.id,
      },
    }).shows(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Movie], {
    nullable: false
  })
  async movies(@TypeGraphQL.Root() platform: Platform, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PlatformMoviesArgs): Promise<Movie[]> {
    return getPrismaFromContext(ctx).platform.findUnique({
      where: {
        id: platform.id,
      },
    }).movies(args);
  }
}
