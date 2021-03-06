import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookLikeListRelationFilter } from "../inputs/BookLikeListRelationFilter";
import { BookReviewLikeListRelationFilter } from "../inputs/BookReviewLikeListRelationFilter";
import { BookReviewListRelationFilter } from "../inputs/BookReviewListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumRoleFilter } from "../inputs/EnumRoleFilter";
import { FollowsListRelationFilter } from "../inputs/FollowsListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MovieLikeListRelationFilter } from "../inputs/MovieLikeListRelationFilter";
import { MovieReviewLikeListRelationFilter } from "../inputs/MovieReviewLikeListRelationFilter";
import { MovieReviewListRelationFilter } from "../inputs/MovieReviewListRelationFilter";
import { NotificationListRelationFilter } from "../inputs/NotificationListRelationFilter";
import { ShowLikeListRelationFilter } from "../inputs/ShowLikeListRelationFilter";
import { ShowReviewLikeListRelationFilter } from "../inputs/ShowReviewLikeListRelationFilter";
import { ShowReviewListRelationFilter } from "../inputs/ShowReviewListRelationFilter";
import { SongLikeListRelationFilter } from "../inputs/SongLikeListRelationFilter";
import { SongReviewLikeListRelationFilter } from "../inputs/SongReviewLikeListRelationFilter";
import { SongReviewListRelationFilter } from "../inputs/SongReviewListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { WatchlistRelationFilter } from "../inputs/WatchlistRelationFilter";

@TypeGraphQL.InputType("UserWhereInput", {
  isAbstract: true
})
export class UserWhereInput {
  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  confirmed?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  username?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  displayname?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumRoleFilter, {
    nullable: true
  })
  role?: EnumRoleFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  avatar?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  bio?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  location?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  website?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  dob?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => FollowsListRelationFilter, {
    nullable: true
  })
  following?: FollowsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FollowsListRelationFilter, {
    nullable: true
  })
  followers?: FollowsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => NotificationListRelationFilter, {
    nullable: true
  })
  notifications?: NotificationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => WatchlistRelationFilter, {
    nullable: true
  })
  watchlist?: WatchlistRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovieLikeListRelationFilter, {
    nullable: true
  })
  likedMovies?: MovieLikeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ShowLikeListRelationFilter, {
    nullable: true
  })
  likedShows?: ShowLikeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SongLikeListRelationFilter, {
    nullable: true
  })
  likedSongs?: SongLikeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BookLikeListRelationFilter, {
    nullable: true
  })
  likedBooks?: BookLikeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovieReviewListRelationFilter, {
    nullable: true
  })
  movieReviews?: MovieReviewListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikeListRelationFilter, {
    nullable: true
  })
  likedMovieReviews?: MovieReviewLikeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ShowReviewListRelationFilter, {
    nullable: true
  })
  showReviews?: ShowReviewListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ShowReviewLikeListRelationFilter, {
    nullable: true
  })
  showReviewLikes?: ShowReviewLikeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BookReviewListRelationFilter, {
    nullable: true
  })
  bookReviews?: BookReviewListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BookReviewLikeListRelationFilter, {
    nullable: true
  })
  bookReviewLikes?: BookReviewLikeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SongReviewListRelationFilter, {
    nullable: true
  })
  songReviews?: SongReviewListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SongReviewLikeListRelationFilter, {
    nullable: true
  })
  songReviewLikes?: SongReviewLikeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
