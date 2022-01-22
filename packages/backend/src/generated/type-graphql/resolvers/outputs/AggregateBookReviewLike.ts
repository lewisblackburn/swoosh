import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewLikeAvgAggregate } from "../outputs/BookReviewLikeAvgAggregate";
import { BookReviewLikeCountAggregate } from "../outputs/BookReviewLikeCountAggregate";
import { BookReviewLikeMaxAggregate } from "../outputs/BookReviewLikeMaxAggregate";
import { BookReviewLikeMinAggregate } from "../outputs/BookReviewLikeMinAggregate";
import { BookReviewLikeSumAggregate } from "../outputs/BookReviewLikeSumAggregate";

@TypeGraphQL.ObjectType("AggregateBookReviewLike", {
  isAbstract: true
})
export class AggregateBookReviewLike {
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
