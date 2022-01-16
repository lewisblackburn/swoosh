import * as TypeGraphQL from "type-graphql";
import { Book } from "../../../models/Book";
import { Movie } from "../../../models/Movie";
import { Review } from "../../../models/Review";
import { Show } from "../../../models/Show";
import { Song } from "../../../models/Song";
import { User } from "../../../models/User";
import { Vote } from "../../../models/Vote";
import { ReviewVoteArgs } from "./args/ReviewVoteArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Review)
export class ReviewRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async user(@TypeGraphQL.Root() review: Review, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).review.findUnique({
      where: {
        id: review.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Movie, {
    nullable: true
  })
  async movie(@TypeGraphQL.Root() review: Review, @TypeGraphQL.Ctx() ctx: any): Promise<Movie | null> {
    return getPrismaFromContext(ctx).review.findUnique({
      where: {
        id: review.id,
      },
    }).movie({});
  }

  @TypeGraphQL.FieldResolver(_type => Show, {
    nullable: true
  })
  async show(@TypeGraphQL.Root() review: Review, @TypeGraphQL.Ctx() ctx: any): Promise<Show | null> {
    return getPrismaFromContext(ctx).review.findUnique({
      where: {
        id: review.id,
      },
    }).show({});
  }

  @TypeGraphQL.FieldResolver(_type => Book, {
    nullable: true
  })
  async book(@TypeGraphQL.Root() review: Review, @TypeGraphQL.Ctx() ctx: any): Promise<Book | null> {
    return getPrismaFromContext(ctx).review.findUnique({
      where: {
        id: review.id,
      },
    }).book({});
  }

  @TypeGraphQL.FieldResolver(_type => Song, {
    nullable: true
  })
  async song(@TypeGraphQL.Root() review: Review, @TypeGraphQL.Ctx() ctx: any): Promise<Song | null> {
    return getPrismaFromContext(ctx).review.findUnique({
      where: {
        id: review.id,
      },
    }).song({});
  }

  @TypeGraphQL.FieldResolver(_type => [Vote], {
    nullable: false
  })
  async vote(@TypeGraphQL.Root() review: Review, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ReviewVoteArgs): Promise<Vote[]> {
    return getPrismaFromContext(ctx).review.findUnique({
      where: {
        id: review.id,
      },
    }).vote(args);
  }
}
