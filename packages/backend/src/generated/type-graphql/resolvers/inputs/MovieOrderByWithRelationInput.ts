import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInMovieOrderByRelationAggregateInput } from "../inputs/ActorInMovieOrderByRelationAggregateInput";
import { GenreOrderByRelationAggregateInput } from "../inputs/GenreOrderByRelationAggregateInput";
import { MovieLikeOrderByRelationAggregateInput } from "../inputs/MovieLikeOrderByRelationAggregateInput";
import { MovieReviewOrderByRelationAggregateInput } from "../inputs/MovieReviewOrderByRelationAggregateInput";
import { PlatformOrderByRelationAggregateInput } from "../inputs/PlatformOrderByRelationAggregateInput";
import { SongInMovieOrderByRelationAggregateInput } from "../inputs/SongInMovieOrderByRelationAggregateInput";
import { WatchlistOrderByRelationAggregateInput } from "../inputs/WatchlistOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieOrderByWithRelationInput", {
  isAbstract: true
})
export class MovieOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tagline?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  overview?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  poster?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  backdrop?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  locked?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  released?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  runtime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  trailer?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rating?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ActorInMovieOrderByRelationAggregateInput, {
    nullable: true
  })
  actors?: ActorInMovieOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GenreOrderByRelationAggregateInput, {
    nullable: true
  })
  genres?: GenreOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlatformOrderByRelationAggregateInput, {
    nullable: true
  })
  platforms?: PlatformOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongInMovieOrderByRelationAggregateInput, {
    nullable: true
  })
  soundtrack?: SongInMovieOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WatchlistOrderByRelationAggregateInput, {
    nullable: true
  })
  watchlist?: WatchlistOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewOrderByRelationAggregateInput, {
    nullable: true
  })
  reviews?: MovieReviewOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovieLikeOrderByRelationAggregateInput, {
    nullable: true
  })
  likes?: MovieLikeOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;
}
