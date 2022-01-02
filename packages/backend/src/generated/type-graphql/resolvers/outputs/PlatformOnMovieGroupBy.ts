import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformOnMovieAvgAggregate } from "../outputs/PlatformOnMovieAvgAggregate";
import { PlatformOnMovieCountAggregate } from "../outputs/PlatformOnMovieCountAggregate";
import { PlatformOnMovieMaxAggregate } from "../outputs/PlatformOnMovieMaxAggregate";
import { PlatformOnMovieMinAggregate } from "../outputs/PlatformOnMovieMinAggregate";
import { PlatformOnMovieSumAggregate } from "../outputs/PlatformOnMovieSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class PlatformOnMovieGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  price!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  platformId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  movieId!: number;

  @TypeGraphQL.Field(_type => PlatformOnMovieCountAggregate, {
    nullable: true
  })
  _count!: PlatformOnMovieCountAggregate | null;

  @TypeGraphQL.Field(_type => PlatformOnMovieAvgAggregate, {
    nullable: true
  })
  _avg!: PlatformOnMovieAvgAggregate | null;

  @TypeGraphQL.Field(_type => PlatformOnMovieSumAggregate, {
    nullable: true
  })
  _sum!: PlatformOnMovieSumAggregate | null;

  @TypeGraphQL.Field(_type => PlatformOnMovieMinAggregate, {
    nullable: true
  })
  _min!: PlatformOnMovieMinAggregate | null;

  @TypeGraphQL.Field(_type => PlatformOnMovieMaxAggregate, {
    nullable: true
  })
  _max!: PlatformOnMovieMaxAggregate | null;
}
