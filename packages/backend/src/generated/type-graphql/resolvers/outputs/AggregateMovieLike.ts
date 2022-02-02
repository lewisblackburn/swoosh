import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikeAvgAggregate } from "../outputs/MovieLikeAvgAggregate";
import { MovieLikeCountAggregate } from "../outputs/MovieLikeCountAggregate";
import { MovieLikeMaxAggregate } from "../outputs/MovieLikeMaxAggregate";
import { MovieLikeMinAggregate } from "../outputs/MovieLikeMinAggregate";
import { MovieLikeSumAggregate } from "../outputs/MovieLikeSumAggregate";

@TypeGraphQL.ObjectType("AggregateMovieLike", {
  isAbstract: true
})
export class AggregateMovieLike {
  @TypeGraphQL.Field(_type => MovieLikeCountAggregate, {
    nullable: true
  })
  _count!: MovieLikeCountAggregate | null;

  @TypeGraphQL.Field(_type => MovieLikeAvgAggregate, {
    nullable: true
  })
  _avg!: MovieLikeAvgAggregate | null;

  @TypeGraphQL.Field(_type => MovieLikeSumAggregate, {
    nullable: true
  })
  _sum!: MovieLikeSumAggregate | null;

  @TypeGraphQL.Field(_type => MovieLikeMinAggregate, {
    nullable: true
  })
  _min!: MovieLikeMinAggregate | null;

  @TypeGraphQL.Field(_type => MovieLikeMaxAggregate, {
    nullable: true
  })
  _max!: MovieLikeMaxAggregate | null;
}
