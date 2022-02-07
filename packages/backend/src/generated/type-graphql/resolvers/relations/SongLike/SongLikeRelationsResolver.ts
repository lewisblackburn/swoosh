import * as TypeGraphQL from "type-graphql";
import { Song } from "../../../models/Song";
import { SongLike } from "../../../models/SongLike";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SongLike)
export class SongLikeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() songLike: SongLike, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).songLike.findUnique({
      where: {
        userId_songId: {
          userId: songLike.userId,
          songId: songLike.songId,
        },
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Song, {
    nullable: false
  })
  async song(@TypeGraphQL.Root() songLike: SongLike, @TypeGraphQL.Ctx() ctx: any): Promise<Song> {
    return getPrismaFromContext(ctx).songLike.findUnique({
      where: {
        userId_songId: {
          userId: songLike.userId,
          songId: songLike.songId,
        },
      },
    }).song({});
  }
}
