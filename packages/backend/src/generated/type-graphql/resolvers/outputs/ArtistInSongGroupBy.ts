import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInSongAvgAggregate } from "../outputs/ArtistInSongAvgAggregate";
import { ArtistInSongCountAggregate } from "../outputs/ArtistInSongCountAggregate";
import { ArtistInSongMaxAggregate } from "../outputs/ArtistInSongMaxAggregate";
import { ArtistInSongMinAggregate } from "../outputs/ArtistInSongMinAggregate";
import { ArtistInSongSumAggregate } from "../outputs/ArtistInSongSumAggregate";

@TypeGraphQL.ObjectType("ArtistInSongGroupBy", {
  isAbstract: true
})
export class ArtistInSongGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  songId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  personId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => ArtistInSongCountAggregate, {
    nullable: true
  })
  _count!: ArtistInSongCountAggregate | null;

  @TypeGraphQL.Field(_type => ArtistInSongAvgAggregate, {
    nullable: true
  })
  _avg!: ArtistInSongAvgAggregate | null;

  @TypeGraphQL.Field(_type => ArtistInSongSumAggregate, {
    nullable: true
  })
  _sum!: ArtistInSongSumAggregate | null;

  @TypeGraphQL.Field(_type => ArtistInSongMinAggregate, {
    nullable: true
  })
  _min!: ArtistInSongMinAggregate | null;

  @TypeGraphQL.Field(_type => ArtistInSongMaxAggregate, {
    nullable: true
  })
  _max!: ArtistInSongMaxAggregate | null;
}
