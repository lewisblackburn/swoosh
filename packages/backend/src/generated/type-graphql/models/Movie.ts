import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ActorInMovie } from "../models/ActorInMovie";
import { Genre } from "../models/Genre";
import { MovieReview } from "../models/MovieReview";
import { Platform } from "../models/Platform";
import { SongInMovie } from "../models/SongInMovie";
import { Watchlist } from "../models/Watchlist";
import { MovieCount } from "../resolvers/outputs/MovieCount";

@TypeGraphQL.ObjectType("Movie", {
  isAbstract: true
})
export class Movie {
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
  overview!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  poster!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  backdrop!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  locked!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  released?: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  runtime?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  trailer?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rating?: string | null;

  actors?: ActorInMovie[];

  genres?: Genre[];

  platforms?: Platform[];

  soundtrack?: SongInMovie[];

  watchlist?: Watchlist[];

  reviews?: MovieReview[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => MovieCount, {
    nullable: true
  })
  _count?: MovieCount | null;
}
