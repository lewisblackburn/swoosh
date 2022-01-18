import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongInShowAvgAggregate } from "../outputs/SongInShowAvgAggregate";
import { SongInShowCountAggregate } from "../outputs/SongInShowCountAggregate";
import { SongInShowMaxAggregate } from "../outputs/SongInShowMaxAggregate";
import { SongInShowMinAggregate } from "../outputs/SongInShowMinAggregate";
import { SongInShowSumAggregate } from "../outputs/SongInShowSumAggregate";

@TypeGraphQL.ObjectType("AggregateSongInShow", {
  isAbstract: true
})
export class AggregateSongInShow {
  @TypeGraphQL.Field(_type => SongInShowCountAggregate, {
    nullable: true
  })
  _count!: SongInShowCountAggregate | null;

  @TypeGraphQL.Field(_type => SongInShowAvgAggregate, {
    nullable: true
  })
  _avg!: SongInShowAvgAggregate | null;

  @TypeGraphQL.Field(_type => SongInShowSumAggregate, {
    nullable: true
  })
  _sum!: SongInShowSumAggregate | null;

  @TypeGraphQL.Field(_type => SongInShowMinAggregate, {
    nullable: true
  })
  _min!: SongInShowMinAggregate | null;

  @TypeGraphQL.Field(_type => SongInShowMaxAggregate, {
    nullable: true
  })
  _max!: SongInShowMaxAggregate | null;
}
