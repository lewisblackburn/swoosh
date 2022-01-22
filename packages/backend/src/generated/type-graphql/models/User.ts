import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { BookReview } from "../models/BookReview";
import { BookReviewLike } from "../models/BookReviewLike";
import { Follows } from "../models/Follows";
import { MovieReview } from "../models/MovieReview";
import { MovieReviewLike } from "../models/MovieReviewLike";
import { Notification } from "../models/Notification";
import { ShowReview } from "../models/ShowReview";
import { ShowReviewLike } from "../models/ShowReviewLike";
import { SongReview } from "../models/SongReview";
import { SongReviewLike } from "../models/SongReviewLike";
import { Watchlist } from "../models/Watchlist";
import { Role } from "../enums/Role";
import { UserCount } from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType("User", {
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  confirmed!: boolean;

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

  password?: string;

  @TypeGraphQL.Field(_type => Role, {
    nullable: false
  })
  role!: "USER" | "ADMIN";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  avatar!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bio!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  location!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  website!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dob!: string;

  following?: Follows[];

  followers?: Follows[];

  notifications?: Notification[];

  watchlist?: Watchlist | null;

  movieReviews?: MovieReview[];

  likedMovieReviews?: MovieReviewLike[];

  showReviews?: ShowReview[];

  showReviewLikes?: ShowReviewLike[];

  bookReviews?: BookReview[];

  bookReviewLikes?: BookReviewLike[];

  songReviews?: SongReview[];

  songReviewLikes?: SongReviewLike[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => UserCount, {
    nullable: true
  })
  _count?: UserCount | null;
}
