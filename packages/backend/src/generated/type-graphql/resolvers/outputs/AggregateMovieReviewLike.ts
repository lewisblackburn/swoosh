import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikeAvgAggregate } from "../outputs/MovieReviewLikeAvgAggregate";
import { MovieReviewLikeCountAggregate } from "../outputs/MovieReviewLikeCountAggregate";
import { MovieReviewLikeMaxAggregate } from "../outputs/MovieReviewLikeMaxAggregate";
import { MovieReviewLikeMinAggregate } from "../outputs/MovieReviewLikeMinAggregate";
import { MovieReviewLikeSumAggregate } from "../outputs/MovieReviewLikeSumAggregate";

@TypeGraphQL.ObjectType("AggregateMovieReviewLike", {
  isAbstract: true
})
export class AggregateMovieReviewLike {
  @TypeGraphQL.Field(_type => MovieReviewLikeCountAggregate, {
    nullable: true
  })
  _count!: MovieReviewLikeCountAggregate | null;

  @TypeGraphQL.Field(_type => MovieReviewLikeAvgAggregate, {
    nullable: true
  })
  _avg!: MovieReviewLikeAvgAggregate | null;

  @TypeGraphQL.Field(_type => MovieReviewLikeSumAggregate, {
    nullable: true
  })
  _sum!: MovieReviewLikeSumAggregate | null;

  @TypeGraphQL.Field(_type => MovieReviewLikeMinAggregate, {
    nullable: true
  })
  _min!: MovieReviewLikeMinAggregate | null;

  @TypeGraphQL.Field(_type => MovieReviewLikeMaxAggregate, {
    nullable: true
  })
  _max!: MovieReviewLikeMaxAggregate | null;
}
