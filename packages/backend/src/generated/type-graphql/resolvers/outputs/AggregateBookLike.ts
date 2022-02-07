import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookLikeAvgAggregate } from "../outputs/BookLikeAvgAggregate";
import { BookLikeCountAggregate } from "../outputs/BookLikeCountAggregate";
import { BookLikeMaxAggregate } from "../outputs/BookLikeMaxAggregate";
import { BookLikeMinAggregate } from "../outputs/BookLikeMinAggregate";
import { BookLikeSumAggregate } from "../outputs/BookLikeSumAggregate";

@TypeGraphQL.ObjectType("AggregateBookLike", {
  isAbstract: true
})
export class AggregateBookLike {
  @TypeGraphQL.Field(_type => BookLikeCountAggregate, {
    nullable: true
  })
  _count!: BookLikeCountAggregate | null;

  @TypeGraphQL.Field(_type => BookLikeAvgAggregate, {
    nullable: true
  })
  _avg!: BookLikeAvgAggregate | null;

  @TypeGraphQL.Field(_type => BookLikeSumAggregate, {
    nullable: true
  })
  _sum!: BookLikeSumAggregate | null;

  @TypeGraphQL.Field(_type => BookLikeMinAggregate, {
    nullable: true
  })
  _min!: BookLikeMinAggregate | null;

  @TypeGraphQL.Field(_type => BookLikeMaxAggregate, {
    nullable: true
  })
  _max!: BookLikeMaxAggregate | null;
}
