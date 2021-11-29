import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieAvgAggregate } from "../outputs/MovieAvgAggregate";
import { MovieCountAggregate } from "../outputs/MovieCountAggregate";
import { MovieMaxAggregate } from "../outputs/MovieMaxAggregate";
import { MovieMinAggregate } from "../outputs/MovieMinAggregate";
import { MovieSumAggregate } from "../outputs/MovieSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class MovieGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  locked!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => MovieCountAggregate, {
    nullable: true
  })
  _count!: MovieCountAggregate | null;

  @TypeGraphQL.Field(_type => MovieAvgAggregate, {
    nullable: true
  })
  _avg!: MovieAvgAggregate | null;

  @TypeGraphQL.Field(_type => MovieSumAggregate, {
    nullable: true
  })
  _sum!: MovieSumAggregate | null;

  @TypeGraphQL.Field(_type => MovieMinAggregate, {
    nullable: true
  })
  _min!: MovieMinAggregate | null;

  @TypeGraphQL.Field(_type => MovieMaxAggregate, {
    nullable: true
  })
  _max!: MovieMaxAggregate | null;
}
