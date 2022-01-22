import * as TypeGraphQL from "type-graphql";
import { Song } from "../../../models/Song";
import { SongReview } from "../../../models/SongReview";
import { SongReviewLike } from "../../../models/SongReviewLike";
import { SongReviewLikesArgs } from "./args/SongReviewLikesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SongReview)
export class SongReviewRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [SongReviewLike], {
    nullable: false
  })
  async likes(@TypeGraphQL.Root() songReview: SongReview, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SongReviewLikesArgs): Promise<SongReviewLike[]> {
    return getPrismaFromContext(ctx).songReview.findUnique({
      where: {
        userId_songId: {
          userId: songReview.userId,
          songId: songReview.songId,
        },
      },
    }).likes(args);
  }

  @TypeGraphQL.FieldResolver(_type => Song, {
    nullable: false
  })
  async song(@TypeGraphQL.Root() songReview: SongReview, @TypeGraphQL.Ctx() ctx: any): Promise<Song> {
    return getPrismaFromContext(ctx).songReview.findUnique({
      where: {
        userId_songId: {
          userId: songReview.userId,
          songId: songReview.songId,
        },
      },
    }).song({});
  }
}
