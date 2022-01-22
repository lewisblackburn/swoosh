import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikeAvgAggregate } from "../outputs/MovieReviewLikeAvgAggregate";
import { MovieReviewLikeCountAggregate } from "../outputs/MovieReviewLikeCountAggregate";
import { MovieReviewLikeMaxAggregate } from "../outputs/MovieReviewLikeMaxAggregate";
import { MovieReviewLikeMinAggregate } from "../outputs/MovieReviewLikeMinAggregate";
import { MovieReviewLikeSumAggregate } from "../outputs/MovieReviewLikeSumAggregate";

@TypeGraphQL.ObjectType("MovieReviewLikeGroupBy", {
  isAbstract: true
})
export class MovieReviewLikeGroupBy {
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
  reviewMovieId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

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
