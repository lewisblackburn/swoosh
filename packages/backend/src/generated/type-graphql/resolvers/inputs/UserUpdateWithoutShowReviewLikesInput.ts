import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewLikeUpdateManyWithoutUserInput } from "../inputs/BookReviewLikeUpdateManyWithoutUserInput";
import { BookReviewUpdateManyWithoutUserInput } from "../inputs/BookReviewUpdateManyWithoutUserInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumRoleFieldUpdateOperationsInput } from "../inputs/EnumRoleFieldUpdateOperationsInput";
import { FollowsUpdateManyWithoutFollowerInput } from "../inputs/FollowsUpdateManyWithoutFollowerInput";
import { FollowsUpdateManyWithoutFollowingInput } from "../inputs/FollowsUpdateManyWithoutFollowingInput";
import { MovieReviewLikeUpdateManyWithoutUserInput } from "../inputs/MovieReviewLikeUpdateManyWithoutUserInput";
import { MovieReviewUpdateManyWithoutUserInput } from "../inputs/MovieReviewUpdateManyWithoutUserInput";
import { NotificationUpdateManyWithoutUserInput } from "../inputs/NotificationUpdateManyWithoutUserInput";
import { ShowReviewUpdateManyWithoutUserInput } from "../inputs/ShowReviewUpdateManyWithoutUserInput";
import { SongReviewLikeUpdateManyWithoutUserInput } from "../inputs/SongReviewLikeUpdateManyWithoutUserInput";
import { SongReviewUpdateManyWithoutUserInput } from "../inputs/SongReviewUpdateManyWithoutUserInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { WatchlistUpdateOneWithoutUserInput } from "../inputs/WatchlistUpdateOneWithoutUserInput";

@TypeGraphQL.InputType("UserUpdateWithoutShowReviewLikesInput", {
  isAbstract: true
})
export class UserUpdateWithoutShowReviewLikesInput {
  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  confirmed?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  username?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  displayname?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumRoleFieldUpdateOperationsInput, {
    nullable: true
  })
  role?: EnumRoleFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  avatar?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  bio?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  location?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  website?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  dob?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FollowsUpdateManyWithoutFollowingInput, {
    nullable: true
  })
  following?: FollowsUpdateManyWithoutFollowingInput | undefined;

  @TypeGraphQL.Field(_type => FollowsUpdateManyWithoutFollowerInput, {
    nullable: true
  })
  followers?: FollowsUpdateManyWithoutFollowerInput | undefined;

  @TypeGraphQL.Field(_type => NotificationUpdateManyWithoutUserInput, {
    nullable: true
  })
  notifications?: NotificationUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => WatchlistUpdateOneWithoutUserInput, {
    nullable: true
  })
  watchlist?: WatchlistUpdateOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewUpdateManyWithoutUserInput, {
    nullable: true
  })
  movieReviews?: MovieReviewUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikeUpdateManyWithoutUserInput, {
    nullable: true
  })
  likedMovieReviews?: MovieReviewLikeUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ShowReviewUpdateManyWithoutUserInput, {
    nullable: true
  })
  showReviews?: ShowReviewUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => BookReviewUpdateManyWithoutUserInput, {
    nullable: true
  })
  bookReviews?: BookReviewUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => BookReviewLikeUpdateManyWithoutUserInput, {
    nullable: true
  })
  bookReviewLikes?: BookReviewLikeUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => SongReviewUpdateManyWithoutUserInput, {
    nullable: true
  })
  songReviews?: SongReviewUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => SongReviewLikeUpdateManyWithoutUserInput, {
    nullable: true
  })
  songReviewLikes?: SongReviewLikeUpdateManyWithoutUserInput | undefined;
}
