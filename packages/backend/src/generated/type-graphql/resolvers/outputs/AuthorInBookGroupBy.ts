import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorInBookAvgAggregate } from "../outputs/AuthorInBookAvgAggregate";
import { AuthorInBookCountAggregate } from "../outputs/AuthorInBookCountAggregate";
import { AuthorInBookMaxAggregate } from "../outputs/AuthorInBookMaxAggregate";
import { AuthorInBookMinAggregate } from "../outputs/AuthorInBookMinAggregate";
import { AuthorInBookSumAggregate } from "../outputs/AuthorInBookSumAggregate";

@TypeGraphQL.ObjectType("AuthorInBookGroupBy", {
  isAbstract: true
})
export class AuthorInBookGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  bookId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  personId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  stagename!: string;

  @TypeGraphQL.Field(_type => AuthorInBookCountAggregate, {
    nullable: true
  })
  _count!: AuthorInBookCountAggregate | null;

  @TypeGraphQL.Field(_type => AuthorInBookAvgAggregate, {
    nullable: true
  })
  _avg!: AuthorInBookAvgAggregate | null;

  @TypeGraphQL.Field(_type => AuthorInBookSumAggregate, {
    nullable: true
  })
  _sum!: AuthorInBookSumAggregate | null;

  @TypeGraphQL.Field(_type => AuthorInBookMinAggregate, {
    nullable: true
  })
  _min!: AuthorInBookMinAggregate | null;

  @TypeGraphQL.Field(_type => AuthorInBookMaxAggregate, {
    nullable: true
  })
  _max!: AuthorInBookMaxAggregate | null;
}
