import * as TypeGraphQL from "type-graphql";
import { ActorInMovie } from "../../../models/ActorInMovie";
import { Movie } from "../../../models/Movie";
import { PlatformOnMovie } from "../../../models/PlatformOnMovie";
import { SongInMovie } from "../../../models/SongInMovie";
import { MovieActorsArgs } from "./args/MovieActorsArgs";
import { MoviePlatformsArgs } from "./args/MoviePlatformsArgs";
import { MovieSoundtrackArgs } from "./args/MovieSoundtrackArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Movie)
export class MovieRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [ActorInMovie], {
    nullable: false
  })
  async actors(@TypeGraphQL.Root() movie: Movie, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: MovieActorsArgs): Promise<ActorInMovie[]> {
    return getPrismaFromContext(ctx).movie.findUnique({
      where: {
        id: movie.id,
      },
    }).actors(args);
  }

  @TypeGraphQL.FieldResolver(_type => [PlatformOnMovie], {
    nullable: false
  })
  async platforms(@TypeGraphQL.Root() movie: Movie, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: MoviePlatformsArgs): Promise<PlatformOnMovie[]> {
    return getPrismaFromContext(ctx).movie.findUnique({
      where: {
        id: movie.id,
      },
    }).platforms(args);
  }

  @TypeGraphQL.FieldResolver(_type => [SongInMovie], {
    nullable: false
  })
  async soundtrack(@TypeGraphQL.Root() movie: Movie, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: MovieSoundtrackArgs): Promise<SongInMovie[]> {
    return getPrismaFromContext(ctx).movie.findUnique({
      where: {
        id: movie.id,
      },
    }).soundtrack(args);
  }
}
