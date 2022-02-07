import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInShowListRelationFilter } from "../inputs/ActorInShowListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { GenreListRelationFilter } from "../inputs/GenreListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PlatformListRelationFilter } from "../inputs/PlatformListRelationFilter";
import { ShowLikeListRelationFilter } from "../inputs/ShowLikeListRelationFilter";
import { ShowReviewListRelationFilter } from "../inputs/ShowReviewListRelationFilter";
import { SongInShowListRelationFilter } from "../inputs/SongInShowListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { WatchlistListRelationFilter } from "../inputs/WatchlistListRelationFilter";

@TypeGraphQL.InputType("ShowWhereInput", {
  isAbstract: true
})
export class ShowWhereInput {
  @TypeGraphQL.Field(_type => [ShowWhereInput], {
    nullable: true
  })
  AND?: ShowWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowWhereInput], {
    nullable: true
  })
  OR?: ShowWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowWhereInput], {
    nullable: true
  })
  NOT?: ShowWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  tagline?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  overview?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  poster?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  backdrop?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  locked?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  released?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  runtime?: FloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  trailer?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  rating?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ActorInShowListRelationFilter, {
    nullable: true
  })
  actors?: ActorInShowListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => GenreListRelationFilter, {
    nullable: true
  })
  genres?: GenreListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PlatformListRelationFilter, {
    nullable: true
  })
  platforms?: PlatformListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SongInShowListRelationFilter, {
    nullable: true
  })
  soundtrack?: SongInShowListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => WatchlistListRelationFilter, {
    nullable: true
  })
  watchlist?: WatchlistListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ShowReviewListRelationFilter, {
    nullable: true
  })
  reviews?: ShowReviewListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ShowLikeListRelationFilter, {
    nullable: true
  })
  likes?: ShowLikeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
