import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformOnShowAvgAggregate } from "../outputs/PlatformOnShowAvgAggregate";
import { PlatformOnShowCountAggregate } from "../outputs/PlatformOnShowCountAggregate";
import { PlatformOnShowMaxAggregate } from "../outputs/PlatformOnShowMaxAggregate";
import { PlatformOnShowMinAggregate } from "../outputs/PlatformOnShowMinAggregate";
import { PlatformOnShowSumAggregate } from "../outputs/PlatformOnShowSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregatePlatformOnShow {
  @TypeGraphQL.Field(_type => PlatformOnShowCountAggregate, {
    nullable: true
  })
  _count!: PlatformOnShowCountAggregate | null;

  @TypeGraphQL.Field(_type => PlatformOnShowAvgAggregate, {
    nullable: true
  })
  _avg!: PlatformOnShowAvgAggregate | null;

  @TypeGraphQL.Field(_type => PlatformOnShowSumAggregate, {
    nullable: true
  })
  _sum!: PlatformOnShowSumAggregate | null;

  @TypeGraphQL.Field(_type => PlatformOnShowMinAggregate, {
    nullable: true
  })
  _min!: PlatformOnShowMinAggregate | null;

  @TypeGraphQL.Field(_type => PlatformOnShowMaxAggregate, {
    nullable: true
  })
  _max!: PlatformOnShowMaxAggregate | null;
}
