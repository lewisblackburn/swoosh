import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewLikeAvgAggregate } from "../outputs/SongReviewLikeAvgAggregate";
import { SongReviewLikeCountAggregate } from "../outputs/SongReviewLikeCountAggregate";
import { SongReviewLikeMaxAggregate } from "../outputs/SongReviewLikeMaxAggregate";
import { SongReviewLikeMinAggregate } from "../outputs/SongReviewLikeMinAggregate";
import { SongReviewLikeSumAggregate } from "../outputs/SongReviewLikeSumAggregate";

@TypeGraphQL.ObjectType("SongReviewLikeGroupBy", {
  isAbstract: true
})
export class SongReviewLikeGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  reviewUserId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  reviewSongId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => SongReviewLikeCountAggregate, {
    nullable: true
  })
  _count!: SongReviewLikeCountAggregate | null;

  @TypeGraphQL.Field(_type => SongReviewLikeAvgAggregate, {
    nullable: true
  })
  _avg!: SongReviewLikeAvgAggregate | null;

  @TypeGraphQL.Field(_type => SongReviewLikeSumAggregate, {
    nullable: true
  })
  _sum!: SongReviewLikeSumAggregate | null;

  @TypeGraphQL.Field(_type => SongReviewLikeMinAggregate, {
    nullable: true
  })
  _min!: SongReviewLikeMinAggregate | null;

  @TypeGraphQL.Field(_type => SongReviewLikeMaxAggregate, {
    nullable: true
  })
  _max!: SongReviewLikeMaxAggregate | null;
}
