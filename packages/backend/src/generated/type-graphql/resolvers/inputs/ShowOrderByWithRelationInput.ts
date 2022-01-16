import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInShowOrderByRelationAggregateInput } from "../inputs/ActorInShowOrderByRelationAggregateInput";
import { FavouriteOrderByRelationAggregateInput } from "../inputs/FavouriteOrderByRelationAggregateInput";
import { GenreOrderByRelationAggregateInput } from "../inputs/GenreOrderByRelationAggregateInput";
import { PlatformOrderByRelationAggregateInput } from "../inputs/PlatformOrderByRelationAggregateInput";
import { RatingOrderByRelationAggregateInput } from "../inputs/RatingOrderByRelationAggregateInput";
import { ReviewOrderByRelationAggregateInput } from "../inputs/ReviewOrderByRelationAggregateInput";
import { SongInShowOrderByRelationAggregateInput } from "../inputs/SongInShowOrderByRelationAggregateInput";
import { WatchlistOrderByRelationAggregateInput } from "../inputs/WatchlistOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ShowOrderByWithRelationInput {
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
  description?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => RatingOrderByRelationAggregateInput, {
    nullable: true
  })
  rating?: RatingOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ActorInShowOrderByRelationAggregateInput, {
    nullable: true
  })
  actors?: ActorInShowOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GenreOrderByRelationAggregateInput, {
    nullable: true
  })
  genres?: GenreOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlatformOrderByRelationAggregateInput, {
    nullable: true
  })
  platforms?: PlatformOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongInShowOrderByRelationAggregateInput, {
    nullable: true
  })
  soundtrack?: SongInShowOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FavouriteOrderByRelationAggregateInput, {
    nullable: true
  })
  favourite?: FavouriteOrderByRelationAggregateInput | undefined;

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
