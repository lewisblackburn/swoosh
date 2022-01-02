import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformAvgAggregate } from "../outputs/PlatformAvgAggregate";
import { PlatformCountAggregate } from "../outputs/PlatformCountAggregate";
import { PlatformMaxAggregate } from "../outputs/PlatformMaxAggregate";
import { PlatformMinAggregate } from "../outputs/PlatformMinAggregate";
import { PlatformSumAggregate } from "../outputs/PlatformSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class PlatformGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => PlatformCountAggregate, {
    nullable: true
  })
  _count!: PlatformCountAggregate | null;

  @TypeGraphQL.Field(_type => PlatformAvgAggregate, {
    nullable: true
  })
  _avg!: PlatformAvgAggregate | null;

  @TypeGraphQL.Field(_type => PlatformSumAggregate, {
    nullable: true
  })
  _sum!: PlatformSumAggregate | null;

  @TypeGraphQL.Field(_type => PlatformMinAggregate, {
    nullable: true
  })
  _min!: PlatformMinAggregate | null;

  @TypeGraphQL.Field(_type => PlatformMaxAggregate, {
    nullable: true
  })
  _max!: PlatformMaxAggregate | null;
}
