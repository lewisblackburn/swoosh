import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewLikeOrderByRelationAggregateInput } from "../inputs/BookReviewLikeOrderByRelationAggregateInput";
import { BookReviewOrderByRelationAggregateInput } from "../inputs/BookReviewOrderByRelationAggregateInput";
import { FollowsOrderByRelationAggregateInput } from "../inputs/FollowsOrderByRelationAggregateInput";
import { MovieReviewLikeOrderByRelationAggregateInput } from "../inputs/MovieReviewLikeOrderByRelationAggregateInput";
import { MovieReviewOrderByRelationAggregateInput } from "../inputs/MovieReviewOrderByRelationAggregateInput";
import { NotificationOrderByRelationAggregateInput } from "../inputs/NotificationOrderByRelationAggregateInput";
import { ShowReviewLikeOrderByRelationAggregateInput } from "../inputs/ShowReviewLikeOrderByRelationAggregateInput";
import { ShowReviewOrderByRelationAggregateInput } from "../inputs/ShowReviewOrderByRelationAggregateInput";
import { SongReviewLikeOrderByRelationAggregateInput } from "../inputs/SongReviewLikeOrderByRelationAggregateInput";
import { SongReviewOrderByRelationAggregateInput } from "../inputs/SongReviewOrderByRelationAggregateInput";
import { WatchlistOrderByWithRelationInput } from "../inputs/WatchlistOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserOrderByWithRelationInput", {
  isAbstract: true
})
export class UserOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  confirmed?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  username?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  displayname?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  role?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  avatar?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  bio?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  location?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  website?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  dob?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FollowsOrderByRelationAggregateInput, {
    nullable: true
  })
  following?: FollowsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FollowsOrderByRelationAggregateInput, {
    nullable: true
  })
  followers?: FollowsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NotificationOrderByRelationAggregateInput, {
    nullable: true
  })
  notifications?: NotificationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WatchlistOrderByWithRelationInput, {
    nullable: true
  })
  watchlist?: WatchlistOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewOrderByRelationAggregateInput, {
    nullable: true
  })
  movieReviews?: MovieReviewOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikeOrderByRelationAggregateInput, {
    nullable: true
  })
  likedMovieReviews?: MovieReviewLikeOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShowReviewOrderByRelationAggregateInput, {
    nullable: true
  })
  showReviews?: ShowReviewOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShowReviewLikeOrderByRelationAggregateInput, {
    nullable: true
  })
  showReviewLikes?: ShowReviewLikeOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookReviewOrderByRelationAggregateInput, {
    nullable: true
  })
  bookReviews?: BookReviewOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookReviewLikeOrderByRelationAggregateInput, {
    nullable: true
  })
  bookReviewLikes?: BookReviewLikeOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongReviewOrderByRelationAggregateInput, {
    nullable: true
  })
  songReviews?: SongReviewOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongReviewLikeOrderByRelationAggregateInput, {
    nullable: true
  })
  songReviewLikes?: SongReviewLikeOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;
}
