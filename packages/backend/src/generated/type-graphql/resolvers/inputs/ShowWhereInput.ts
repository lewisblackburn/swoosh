import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInShowListRelationFilter } from "../inputs/ActorInShowListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { GenreListRelationFilter } from "../inputs/GenreListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PlatformListRelationFilter } from "../inputs/PlatformListRelationFilter";
import { ShowReviewListRelationFilter } from "../inputs/ShowReviewListRelationFilter";
import { SongInShowListRelationFilter } from "../inputs/SongInShowListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
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
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  thumbnail?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  locked?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  released?: DateTimeNullableFilter | undefined;

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

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
