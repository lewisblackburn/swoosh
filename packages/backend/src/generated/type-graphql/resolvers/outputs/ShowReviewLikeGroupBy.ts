import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewLikeAvgAggregate } from "../outputs/ShowReviewLikeAvgAggregate";
import { ShowReviewLikeCountAggregate } from "../outputs/ShowReviewLikeCountAggregate";
import { ShowReviewLikeMaxAggregate } from "../outputs/ShowReviewLikeMaxAggregate";
import { ShowReviewLikeMinAggregate } from "../outputs/ShowReviewLikeMinAggregate";
import { ShowReviewLikeSumAggregate } from "../outputs/ShowReviewLikeSumAggregate";

@TypeGraphQL.ObjectType("ShowReviewLikeGroupBy", {
  isAbstract: true
})
export class ShowReviewLikeGroupBy {
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
  reviewShowId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => ShowReviewLikeCountAggregate, {
    nullable: true
  })
  _count!: ShowReviewLikeCountAggregate | null;

  @TypeGraphQL.Field(_type => ShowReviewLikeAvgAggregate, {
    nullable: true
  })
  _avg!: ShowReviewLikeAvgAggregate | null;

  @TypeGraphQL.Field(_type => ShowReviewLikeSumAggregate, {
    nullable: true
  })
  _sum!: ShowReviewLikeSumAggregate | null;

  @TypeGraphQL.Field(_type => ShowReviewLikeMinAggregate, {
    nullable: true
  })
  _min!: ShowReviewLikeMinAggregate | null;

  @TypeGraphQL.Field(_type => ShowReviewLikeMaxAggregate, {
    nullable: true
  })
  _max!: ShowReviewLikeMaxAggregate | null;
}
