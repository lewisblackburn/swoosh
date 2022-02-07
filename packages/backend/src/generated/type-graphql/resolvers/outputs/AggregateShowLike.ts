import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowLikeAvgAggregate } from "../outputs/ShowLikeAvgAggregate";
import { ShowLikeCountAggregate } from "../outputs/ShowLikeCountAggregate";
import { ShowLikeMaxAggregate } from "../outputs/ShowLikeMaxAggregate";
import { ShowLikeMinAggregate } from "../outputs/ShowLikeMinAggregate";
import { ShowLikeSumAggregate } from "../outputs/ShowLikeSumAggregate";

@TypeGraphQL.ObjectType("AggregateShowLike", {
  isAbstract: true
})
export class AggregateShowLike {
  @TypeGraphQL.Field(_type => ShowLikeCountAggregate, {
    nullable: true
  })
  _count!: ShowLikeCountAggregate | null;

  @TypeGraphQL.Field(_type => ShowLikeAvgAggregate, {
    nullable: true
  })
  _avg!: ShowLikeAvgAggregate | null;

  @TypeGraphQL.Field(_type => ShowLikeSumAggregate, {
    nullable: true
  })
  _sum!: ShowLikeSumAggregate | null;

  @TypeGraphQL.Field(_type => ShowLikeMinAggregate, {
    nullable: true
  })
  _min!: ShowLikeMinAggregate | null;

  @TypeGraphQL.Field(_type => ShowLikeMaxAggregate, {
    nullable: true
  })
  _max!: ShowLikeMaxAggregate | null;
}
