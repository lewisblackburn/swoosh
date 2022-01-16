import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInMovieListRelationFilter } from "../inputs/ActorInMovieListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FavouriteListRelationFilter } from "../inputs/FavouriteListRelationFilter";
import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { GenreListRelationFilter } from "../inputs/GenreListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { PlatformListRelationFilter } from "../inputs/PlatformListRelationFilter";
import { RatingListRelationFilter } from "../inputs/RatingListRelationFilter";
import { ReviewListRelationFilter } from "../inputs/ReviewListRelationFilter";
import { SongInMovieListRelationFilter } from "../inputs/SongInMovieListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { WatchlistListRelationFilter } from "../inputs/WatchlistListRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieWhereInput {
  @TypeGraphQL.Field(_type => [MovieWhereInput], {
    nullable: true
  })
  AND?: MovieWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereInput], {
    nullable: true
  })
  OR?: MovieWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereInput], {
    nullable: true
  })
  NOT?: MovieWhereInput[] | undefined;

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
  overview?: StringFilter | undefined;

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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  status?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  runtime?: FloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  revenue?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  trailer?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => RatingListRelationFilter, {
    nullable: true
  })
  rating?: RatingListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ActorInMovieListRelationFilter, {
    nullable: true
  })
  actors?: ActorInMovieListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => GenreListRelationFilter, {
    nullable: true
  })
  genres?: GenreListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PlatformListRelationFilter, {
    nullable: true
  })
  platforms?: PlatformListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SongInMovieListRelationFilter, {
    nullable: true
  })
  soundtrack?: SongInMovieListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FavouriteListRelationFilter, {
    nullable: true
  })
  favourites?: FavouriteListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => WatchlistListRelationFilter, {
    nullable: true
  })
  watchlist?: WatchlistListRelationFilter | undefined;

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
}
