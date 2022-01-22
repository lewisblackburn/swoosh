import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewLikeAvgAggregate } from "../outputs/BookReviewLikeAvgAggregate";
import { BookReviewLikeCountAggregate } from "../outputs/BookReviewLikeCountAggregate";
import { BookReviewLikeMaxAggregate } from "../outputs/BookReviewLikeMaxAggregate";
import { BookReviewLikeMinAggregate } from "../outputs/BookReviewLikeMinAggregate";
import { BookReviewLikeSumAggregate } from "../outputs/BookReviewLikeSumAggregate";

@TypeGraphQL.ObjectType("BookReviewLikeGroupBy", {
  isAbstract: true
})
export class BookReviewLikeGroupBy {
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
  reviewBookId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => BookReviewLikeCountAggregate, {
    nullable: true
  })
  _count!: BookReviewLikeCountAggregate | null;

  @TypeGraphQL.Field(_type => BookReviewLikeAvgAggregate, {
    nullable: true
  })
  _avg!: BookReviewLikeAvgAggregate | null;

  @TypeGraphQL.Field(_type => BookReviewLikeSumAggregate, {
    nullable: true
  })
  _sum!: BookReviewLikeSumAggregate | null;

  @TypeGraphQL.Field(_type => BookReviewLikeMinAggregate, {
    nullable: true
  })
  _min!: BookReviewLikeMinAggregate | null;

  @TypeGraphQL.Field(_type => BookReviewLikeMaxAggregate, {
    nullable: true
  })
  _max!: BookReviewLikeMaxAggregate | null;
}
