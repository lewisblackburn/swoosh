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
export class AggregateReview {
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
