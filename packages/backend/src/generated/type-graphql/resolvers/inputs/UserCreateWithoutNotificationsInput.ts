import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewCreateNestedManyWithoutUserInput } from "../inputs/BookReviewCreateNestedManyWithoutUserInput";
import { BookReviewLikeCreateNestedManyWithoutUserInput } from "../inputs/BookReviewLikeCreateNestedManyWithoutUserInput";
import { FollowsCreateNestedManyWithoutFollowerInput } from "../inputs/FollowsCreateNestedManyWithoutFollowerInput";
import { FollowsCreateNestedManyWithoutFollowingInput } from "../inputs/FollowsCreateNestedManyWithoutFollowingInput";
import { MovieLikeCreateNestedManyWithoutUserInput } from "../inputs/MovieLikeCreateNestedManyWithoutUserInput";
import { MovieReviewCreateNestedManyWithoutUserInput } from "../inputs/MovieReviewCreateNestedManyWithoutUserInput";
import { MovieReviewLikeCreateNestedManyWithoutUserInput } from "../inputs/MovieReviewLikeCreateNestedManyWithoutUserInput";
import { ShowReviewCreateNestedManyWithoutUserInput } from "../inputs/ShowReviewCreateNestedManyWithoutUserInput";
import { ShowReviewLikeCreateNestedManyWithoutUserInput } from "../inputs/ShowReviewLikeCreateNestedManyWithoutUserInput";
import { SongReviewCreateNestedManyWithoutUserInput } from "../inputs/SongReviewCreateNestedManyWithoutUserInput";
import { SongReviewLikeCreateNestedManyWithoutUserInput } from "../inputs/SongReviewLikeCreateNestedManyWithoutUserInput";
import { WatchlistCreateNestedOneWithoutUserInput } from "../inputs/WatchlistCreateNestedOneWithoutUserInput";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType("UserCreateWithoutNotificationsInput", {
  isAbstract: true
})
export class UserCreateWithoutNotificationsInput {
  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  confirmed?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  displayname!: string;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  role?: "USER" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  avatar?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bio?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  location?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  website?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dob?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => FollowsCreateNestedManyWithoutFollowingInput, {
    nullable: true
  })
  following?: FollowsCreateNestedManyWithoutFollowingInput | undefined;

  @TypeGraphQL.Field(_type => FollowsCreateNestedManyWithoutFollowerInput, {
    nullable: true
  })
  followers?: FollowsCreateNestedManyWithoutFollowerInput | undefined;

  @TypeGraphQL.Field(_type => WatchlistCreateNestedOneWithoutUserInput, {
    nullable: true
  })
  watchlist?: WatchlistCreateNestedOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => MovieLikeCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  likedMovies?: MovieLikeCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  movieReviews?: MovieReviewCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikeCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  likedMovieReviews?: MovieReviewLikeCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ShowReviewCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  showReviews?: ShowReviewCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ShowReviewLikeCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  showReviewLikes?: ShowReviewLikeCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => BookReviewCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  bookReviews?: BookReviewCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => BookReviewLikeCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  bookReviewLikes?: BookReviewLikeCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => SongReviewCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  songReviews?: SongReviewCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => SongReviewLikeCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  songReviewLikes?: SongReviewLikeCreateNestedManyWithoutUserInput | undefined;
}
