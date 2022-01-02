import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongInMovieAvgAggregate } from "../outputs/SongInMovieAvgAggregate";
import { SongInMovieCountAggregate } from "../outputs/SongInMovieCountAggregate";
import { SongInMovieMaxAggregate } from "../outputs/SongInMovieMaxAggregate";
import { SongInMovieMinAggregate } from "../outputs/SongInMovieMinAggregate";
import { SongInMovieSumAggregate } from "../outputs/SongInMovieSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateSongInMovie {
  @TypeGraphQL.Field(_type => SongInMovieCountAggregate, {
    nullable: true
  })
  _count!: SongInMovieCountAggregate | null;

  @TypeGraphQL.Field(_type => SongInMovieAvgAggregate, {
    nullable: true
  })
  _avg!: SongInMovieAvgAggregate | null;

  @TypeGraphQL.Field(_type => SongInMovieSumAggregate, {
    nullable: true
  })
  _sum!: SongInMovieSumAggregate | null;

  @TypeGraphQL.Field(_type => SongInMovieMinAggregate, {
    nullable: true
  })
  _min!: SongInMovieMinAggregate | null;

  @TypeGraphQL.Field(_type => SongInMovieMaxAggregate, {
    nullable: true
  })
  _max!: SongInMovieMaxAggregate | null;
}
