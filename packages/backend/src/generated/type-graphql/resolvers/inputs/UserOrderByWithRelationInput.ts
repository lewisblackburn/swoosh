import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavouriteOrderByWithRelationInput } from "../inputs/FavouriteOrderByWithRelationInput";
import { FollowsOrderByRelationAggregateInput } from "../inputs/FollowsOrderByRelationAggregateInput";
import { NotificationOrderByRelationAggregateInput } from "../inputs/NotificationOrderByRelationAggregateInput";
import { ReviewOrderByRelationAggregateInput } from "../inputs/ReviewOrderByRelationAggregateInput";
import { VoteOrderByRelationAggregateInput } from "../inputs/VoteOrderByRelationAggregateInput";
import { WatchlistOrderByWithRelationInput } from "../inputs/WatchlistOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  confirmed?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  username?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  displayname?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  password?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  role?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  avatar?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  bio?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  location?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  website?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  dob?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FollowsOrderByRelationAggregateInput, {
    nullable: true
  })
  following?: FollowsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FollowsOrderByRelationAggregateInput, {
    nullable: true
  })
  followers?: FollowsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NotificationOrderByRelationAggregateInput, {
    nullable: true
  })
  notifications?: NotificationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WatchlistOrderByWithRelationInput, {
    nullable: true
  })
  watchlist?: WatchlistOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => FavouriteOrderByWithRelationInput, {
    nullable: true
  })
  favourites?: FavouriteOrderByWithRelationInput | undefined;

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

  @TypeGraphQL.Field(_type => VoteOrderByRelationAggregateInput, {
    nullable: true
  })
  Vote?: VoteOrderByRelationAggregateInput | undefined;
}
