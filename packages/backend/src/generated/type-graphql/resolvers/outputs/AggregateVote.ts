import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VoteAvgAggregate } from "../outputs/VoteAvgAggregate";
import { VoteCountAggregate } from "../outputs/VoteCountAggregate";
import { VoteMaxAggregate } from "../outputs/VoteMaxAggregate";
import { VoteMinAggregate } from "../outputs/VoteMinAggregate";
import { VoteSumAggregate } from "../outputs/VoteSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateVote {
  @TypeGraphQL.Field(_type => VoteCountAggregate, {
    nullable: true
  })
  _count!: VoteCountAggregate | null;

  @TypeGraphQL.Field(_type => VoteAvgAggregate, {
    nullable: true
  })
  _avg!: VoteAvgAggregate | null;

  @TypeGraphQL.Field(_type => VoteSumAggregate, {
    nullable: true
  })
  _sum!: VoteSumAggregate | null;

  @TypeGraphQL.Field(_type => VoteMinAggregate, {
    nullable: true
  })
  _min!: VoteMinAggregate | null;

  @TypeGraphQL.Field(_type => VoteMaxAggregate, {
    nullable: true
  })
  _max!: VoteMaxAggregate | null;
}
