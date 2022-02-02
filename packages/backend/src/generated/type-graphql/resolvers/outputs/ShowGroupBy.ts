import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowAvgAggregate } from "../outputs/ShowAvgAggregate";
import { ShowCountAggregate } from "../outputs/ShowCountAggregate";
import { ShowMaxAggregate } from "../outputs/ShowMaxAggregate";
import { ShowMinAggregate } from "../outputs/ShowMinAggregate";
import { ShowSumAggregate } from "../outputs/ShowSumAggregate";

@TypeGraphQL.ObjectType("ShowGroupBy", {
  isAbstract: true
})
export class ShowGroupBy {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  poster!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  locked!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  released!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

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
