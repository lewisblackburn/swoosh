import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInShowAvgAggregate } from "../outputs/ActorInShowAvgAggregate";
import { ActorInShowCountAggregate } from "../outputs/ActorInShowCountAggregate";
import { ActorInShowMaxAggregate } from "../outputs/ActorInShowMaxAggregate";
import { ActorInShowMinAggregate } from "../outputs/ActorInShowMinAggregate";
import { ActorInShowSumAggregate } from "../outputs/ActorInShowSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateActorInShow {
  @TypeGraphQL.Field(_type => ActorInShowCountAggregate, {
    nullable: true
  })
  _count!: ActorInShowCountAggregate | null;

  @TypeGraphQL.Field(_type => ActorInShowAvgAggregate, {
    nullable: true
  })
  _avg!: ActorInShowAvgAggregate | null;

  @TypeGraphQL.Field(_type => ActorInShowSumAggregate, {
    nullable: true
  })
  _sum!: ActorInShowSumAggregate | null;

  @TypeGraphQL.Field(_type => ActorInShowMinAggregate, {
    nullable: true
  })
  _min!: ActorInShowMinAggregate | null;

  @TypeGraphQL.Field(_type => ActorInShowMaxAggregate, {
    nullable: true
  })
  _max!: ActorInShowMaxAggregate | null;
}
