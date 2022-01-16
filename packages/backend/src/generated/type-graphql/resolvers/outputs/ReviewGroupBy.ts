import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewAvgAggregate } from "../outputs/ReviewAvgAggregate";
import { ReviewCountAggregate } from "../outputs/ReviewCountAggregate";
import { ReviewMaxAggregate } from "../outputs/ReviewMaxAggregate";
import { ReviewMinAggregate } from "../outputs/ReviewMinAggregate";
import { ReviewSumAggregate } from "../outputs/ReviewSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ReviewGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  review!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  userId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  movieId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  showId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  bookId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  songId!: number | null;

  @TypeGraphQL.Field(_type => ReviewCountAggregate, {
    nullable: true
  })
  _count!: ReviewCountAggregate | null;

  @TypeGraphQL.Field(_type => ReviewAvgAggregate, {
    nullable: true
  })
  _avg!: ReviewAvgAggregate | null;

  @TypeGraphQL.Field(_type => ReviewSumAggregate, {
    nullable: true
  })
  _sum!: ReviewSumAggregate | null;

  @TypeGraphQL.Field(_type => ReviewMinAggregate, {
    nullable: true
  })
  _min!: ReviewMinAggregate | null;

  @TypeGraphQL.Field(_type => ReviewMaxAggregate, {
    nullable: true
  })
  _max!: ReviewMaxAggregate | null;
}
