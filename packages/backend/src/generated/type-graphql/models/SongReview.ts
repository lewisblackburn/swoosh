import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Song } from "../models/Song";
import { SongReviewLike } from "../models/SongReviewLike";
import { User } from "../models/User";
import { SongReviewCount } from "../resolvers/outputs/SongReviewCount";

@TypeGraphQL.ObjectType("SongReview", {
  isAbstract: true
})
export class SongReview {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  review?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rating!: number;

  likes?: SongReviewLike[];

  user?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  song?: Song;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  songId!: number;

  @TypeGraphQL.Field(_type => SongReviewCount, {
    nullable: true
  })
  _count?: SongReviewCount | null;
}
