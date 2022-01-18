import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowsAvgAggregate } from "../outputs/FollowsAvgAggregate";
import { FollowsCountAggregate } from "../outputs/FollowsCountAggregate";
import { FollowsMaxAggregate } from "../outputs/FollowsMaxAggregate";
import { FollowsMinAggregate } from "../outputs/FollowsMinAggregate";
import { FollowsSumAggregate } from "../outputs/FollowsSumAggregate";

@TypeGraphQL.ObjectType("FollowsGroupBy", {
  isAbstract: true
})
export class FollowsGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  followingId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  followerId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => FollowsCountAggregate, {
    nullable: true
  })
  _count!: FollowsCountAggregate | null;

  @TypeGraphQL.Field(_type => FollowsAvgAggregate, {
    nullable: true
  })
  _avg!: FollowsAvgAggregate | null;

  @TypeGraphQL.Field(_type => FollowsSumAggregate, {
    nullable: true
  })
  _sum!: FollowsSumAggregate | null;

  @TypeGraphQL.Field(_type => FollowsMinAggregate, {
    nullable: true
  })
  _min!: FollowsMinAggregate | null;

  @TypeGraphQL.Field(_type => FollowsMaxAggregate, {
    nullable: true
  })
  _max!: FollowsMaxAggregate | null;
}
