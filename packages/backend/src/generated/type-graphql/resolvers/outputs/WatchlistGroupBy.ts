import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WatchlistAvgAggregate } from "../outputs/WatchlistAvgAggregate";
import { WatchlistCountAggregate } from "../outputs/WatchlistCountAggregate";
import { WatchlistMaxAggregate } from "../outputs/WatchlistMaxAggregate";
import { WatchlistMinAggregate } from "../outputs/WatchlistMinAggregate";
import { WatchlistSumAggregate } from "../outputs/WatchlistSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class WatchlistGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => WatchlistCountAggregate, {
    nullable: true
  })
  _count!: WatchlistCountAggregate | null;

  @TypeGraphQL.Field(_type => WatchlistAvgAggregate, {
    nullable: true
  })
  _avg!: WatchlistAvgAggregate | null;

  @TypeGraphQL.Field(_type => WatchlistSumAggregate, {
    nullable: true
  })
  _sum!: WatchlistSumAggregate | null;

  @TypeGraphQL.Field(_type => WatchlistMinAggregate, {
    nullable: true
  })
  _min!: WatchlistMinAggregate | null;

  @TypeGraphQL.Field(_type => WatchlistMaxAggregate, {
    nullable: true
  })
  _max!: WatchlistMaxAggregate | null;
}
