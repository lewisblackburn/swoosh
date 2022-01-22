import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewLikeAvgAggregate } from "../outputs/SongReviewLikeAvgAggregate";
import { SongReviewLikeCountAggregate } from "../outputs/SongReviewLikeCountAggregate";
import { SongReviewLikeMaxAggregate } from "../outputs/SongReviewLikeMaxAggregate";
import { SongReviewLikeMinAggregate } from "../outputs/SongReviewLikeMinAggregate";
import { SongReviewLikeSumAggregate } from "../outputs/SongReviewLikeSumAggregate";

@TypeGraphQL.ObjectType("AggregateSongReviewLike", {
  isAbstract: true
})
export class AggregateSongReviewLike {
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
