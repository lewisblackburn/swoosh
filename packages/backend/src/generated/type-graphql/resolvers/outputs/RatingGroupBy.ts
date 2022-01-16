import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingAvgAggregate } from "../outputs/RatingAvgAggregate";
import { RatingCountAggregate } from "../outputs/RatingCountAggregate";
import { RatingMaxAggregate } from "../outputs/RatingMaxAggregate";
import { RatingMinAggregate } from "../outputs/RatingMinAggregate";
import { RatingSumAggregate } from "../outputs/RatingSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class RatingGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  age!: string;

  @TypeGraphQL.Field(_type => RatingCountAggregate, {
    nullable: true
  })
  _count!: RatingCountAggregate | null;

  @TypeGraphQL.Field(_type => RatingAvgAggregate, {
    nullable: true
  })
  _avg!: RatingAvgAggregate | null;

  @TypeGraphQL.Field(_type => RatingSumAggregate, {
    nullable: true
  })
  _sum!: RatingSumAggregate | null;

  @TypeGraphQL.Field(_type => RatingMinAggregate, {
    nullable: true
  })
  _min!: RatingMinAggregate | null;

  @TypeGraphQL.Field(_type => RatingMaxAggregate, {
    nullable: true
  })
  _max!: RatingMaxAggregate | null;
}
