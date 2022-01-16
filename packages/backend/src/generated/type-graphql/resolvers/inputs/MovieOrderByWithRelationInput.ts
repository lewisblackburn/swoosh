import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInMovieOrderByRelationAggregateInput } from "../inputs/ActorInMovieOrderByRelationAggregateInput";
import { FavouriteOrderByRelationAggregateInput } from "../inputs/FavouriteOrderByRelationAggregateInput";
import { GenreOrderByRelationAggregateInput } from "../inputs/GenreOrderByRelationAggregateInput";
import { PlatformOrderByRelationAggregateInput } from "../inputs/PlatformOrderByRelationAggregateInput";
import { RatingOrderByRelationAggregateInput } from "../inputs/RatingOrderByRelationAggregateInput";
import { ReviewOrderByRelationAggregateInput } from "../inputs/ReviewOrderByRelationAggregateInput";
import { SongInMovieOrderByRelationAggregateInput } from "../inputs/SongInMovieOrderByRelationAggregateInput";
import { WatchlistOrderByRelationAggregateInput } from "../inputs/WatchlistOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
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
  overview?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  thumbnail?: "asc" | "desc" | undefined;

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
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  runtime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  revenue?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  trailer?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => RatingOrderByRelationAggregateInput, {
    nullable: true
  })
  rating?: RatingOrderByRelationAggregateInput | undefined;

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

  @TypeGraphQL.Field(_type => FavouriteOrderByRelationAggregateInput, {
    nullable: true
  })
  favourites?: FavouriteOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WatchlistOrderByRelationAggregateInput, {
    nullable: true
  })
  watchlist?: WatchlistOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReviewOrderByRelationAggregateInput, {
    nullable: true
  })
  reviews?: ReviewOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;
}
