import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongLikeAvgAggregate } from "../outputs/SongLikeAvgAggregate";
import { SongLikeCountAggregate } from "../outputs/SongLikeCountAggregate";
import { SongLikeMaxAggregate } from "../outputs/SongLikeMaxAggregate";
import { SongLikeMinAggregate } from "../outputs/SongLikeMinAggregate";
import { SongLikeSumAggregate } from "../outputs/SongLikeSumAggregate";

@TypeGraphQL.ObjectType("AggregateSongLike", {
  isAbstract: true
})
export class AggregateSongLike {
  @TypeGraphQL.Field(_type => SongLikeCountAggregate, {
    nullable: true
  })
  _count!: SongLikeCountAggregate | null;

  @TypeGraphQL.Field(_type => SongLikeAvgAggregate, {
    nullable: true
  })
  _avg!: SongLikeAvgAggregate | null;

  @TypeGraphQL.Field(_type => SongLikeSumAggregate, {
    nullable: true
  })
  _sum!: SongLikeSumAggregate | null;

  @TypeGraphQL.Field(_type => SongLikeMinAggregate, {
    nullable: true
  })
  _min!: SongLikeMinAggregate | null;

  @TypeGraphQL.Field(_type => SongLikeMaxAggregate, {
    nullable: true
  })
  _max!: SongLikeMaxAggregate | null;
}
