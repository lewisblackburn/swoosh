import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewAvgAggregate } from "../outputs/ShowReviewAvgAggregate";
import { ShowReviewCountAggregate } from "../outputs/ShowReviewCountAggregate";
import { ShowReviewMaxAggregate } from "../outputs/ShowReviewMaxAggregate";
import { ShowReviewMinAggregate } from "../outputs/ShowReviewMinAggregate";
import { ShowReviewSumAggregate } from "../outputs/ShowReviewSumAggregate";

@TypeGraphQL.ObjectType("ShowReviewGroupBy", {
  isAbstract: true
})
export class ShowReviewGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  review!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rating!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  showId!: number;

  @TypeGraphQL.Field(_type => ShowReviewCountAggregate, {
    nullable: true
  })
  _count!: ShowReviewCountAggregate | null;

  @TypeGraphQL.Field(_type => ShowReviewAvgAggregate, {
    nullable: true
  })
  _avg!: ShowReviewAvgAggregate | null;

  @TypeGraphQL.Field(_type => ShowReviewSumAggregate, {
    nullable: true
  })
  _sum!: ShowReviewSumAggregate | null;

  @TypeGraphQL.Field(_type => ShowReviewMinAggregate, {
    nullable: true
  })
  _min!: ShowReviewMinAggregate | null;

  @TypeGraphQL.Field(_type => ShowReviewMaxAggregate, {
    nullable: true
  })
  _max!: ShowReviewMaxAggregate | null;
}
