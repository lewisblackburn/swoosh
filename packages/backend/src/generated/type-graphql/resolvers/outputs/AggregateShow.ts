import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowAvgAggregate } from "../outputs/ShowAvgAggregate";
import { ShowCountAggregate } from "../outputs/ShowCountAggregate";
import { ShowMaxAggregate } from "../outputs/ShowMaxAggregate";
import { ShowMinAggregate } from "../outputs/ShowMinAggregate";
import { ShowSumAggregate } from "../outputs/ShowSumAggregate";

@TypeGraphQL.ObjectType("AggregateShow", {
  isAbstract: true
})
export class AggregateShow {
  @TypeGraphQL.Field(_type => ShowCountAggregate, {
    nullable: true
  })
  _count!: ShowCountAggregate | null;

  @TypeGraphQL.Field(_type => ShowAvgAggregate, {
    nullable: true
  })
  _avg!: ShowAvgAggregate | null;

  @TypeGraphQL.Field(_type => ShowSumAggregate, {
    nullable: true
  })
  _sum!: ShowSumAggregate | null;

  @TypeGraphQL.Field(_type => ShowMinAggregate, {
    nullable: true
  })
  _min!: ShowMinAggregate | null;

  @TypeGraphQL.Field(_type => ShowMaxAggregate, {
    nullable: true
  })
  _max!: ShowMaxAggregate | null;
}
