import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonAvgAggregate } from "../outputs/PersonAvgAggregate";
import { PersonCountAggregate } from "../outputs/PersonCountAggregate";
import { PersonMaxAggregate } from "../outputs/PersonMaxAggregate";
import { PersonMinAggregate } from "../outputs/PersonMinAggregate";
import { PersonSumAggregate } from "../outputs/PersonSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregatePerson {
  @TypeGraphQL.Field(_type => PersonCountAggregate, {
    nullable: true
  })
  _count!: PersonCountAggregate | null;

  @TypeGraphQL.Field(_type => PersonAvgAggregate, {
    nullable: true
  })
  _avg!: PersonAvgAggregate | null;

  @TypeGraphQL.Field(_type => PersonSumAggregate, {
    nullable: true
  })
  _sum!: PersonSumAggregate | null;

  @TypeGraphQL.Field(_type => PersonMinAggregate, {
    nullable: true
  })
  _min!: PersonMinAggregate | null;

  @TypeGraphQL.Field(_type => PersonMaxAggregate, {
    nullable: true
  })
  _max!: PersonMaxAggregate | null;
}
