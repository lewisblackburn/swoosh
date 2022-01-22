import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewAvgAggregate } from "../outputs/SongReviewAvgAggregate";
import { SongReviewCountAggregate } from "../outputs/SongReviewCountAggregate";
import { SongReviewMaxAggregate } from "../outputs/SongReviewMaxAggregate";
import { SongReviewMinAggregate } from "../outputs/SongReviewMinAggregate";
import { SongReviewSumAggregate } from "../outputs/SongReviewSumAggregate";

@TypeGraphQL.ObjectType("SongReviewGroupBy", {
  isAbstract: true
})
export class SongReviewGroupBy {
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
  songId!: number;

  @TypeGraphQL.Field(_type => SongReviewCountAggregate, {
    nullable: true
  })
  _count!: SongReviewCountAggregate | null;

  @TypeGraphQL.Field(_type => SongReviewAvgAggregate, {
    nullable: true
  })
  _avg!: SongReviewAvgAggregate | null;

  @TypeGraphQL.Field(_type => SongReviewSumAggregate, {
    nullable: true
  })
  _sum!: SongReviewSumAggregate | null;

  @TypeGraphQL.Field(_type => SongReviewMinAggregate, {
    nullable: true
  })
  _min!: SongReviewMinAggregate | null;

  @TypeGraphQL.Field(_type => SongReviewMaxAggregate, {
    nullable: true
  })
  _max!: SongReviewMaxAggregate | null;
}
