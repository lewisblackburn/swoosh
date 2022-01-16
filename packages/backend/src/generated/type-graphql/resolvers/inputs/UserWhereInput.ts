import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumRoleFilter } from "../inputs/EnumRoleFilter";
import { FavouriteRelationFilter } from "../inputs/FavouriteRelationFilter";
import { FollowsListRelationFilter } from "../inputs/FollowsListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { NotificationListRelationFilter } from "../inputs/NotificationListRelationFilter";
import { ReviewListRelationFilter } from "../inputs/ReviewListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { VoteListRelationFilter } from "../inputs/VoteListRelationFilter";
import { WatchlistRelationFilter } from "../inputs/WatchlistRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserWhereInput {
  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  confirmed?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  username?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  displayname?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  password?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumRoleFilter, {
    nullable: true
  })
  role?: EnumRoleFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  avatar?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  bio?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  location?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  website?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  dob?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FollowsListRelationFilter, {
    nullable: true
  })
  following?: FollowsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FollowsListRelationFilter, {
    nullable: true
  })
  followers?: FollowsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => NotificationListRelationFilter, {
    nullable: true
  })
  notifications?: NotificationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => WatchlistRelationFilter, {
    nullable: true
  })
  watchlist?: WatchlistRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FavouriteRelationFilter, {
    nullable: true
  })
  favourites?: FavouriteRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ReviewListRelationFilter, {
    nullable: true
  })
  reviews?: ReviewListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => VoteListRelationFilter, {
    nullable: true
  })
  Vote?: VoteListRelationFilter | undefined;
}
