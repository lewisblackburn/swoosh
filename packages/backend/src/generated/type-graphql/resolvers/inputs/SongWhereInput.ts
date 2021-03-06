import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInSongListRelationFilter } from "../inputs/ArtistInSongListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { GenreListRelationFilter } from "../inputs/GenreListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { SongInMovieListRelationFilter } from "../inputs/SongInMovieListRelationFilter";
import { SongInShowListRelationFilter } from "../inputs/SongInShowListRelationFilter";
import { SongLikeListRelationFilter } from "../inputs/SongLikeListRelationFilter";
import { SongReviewListRelationFilter } from "../inputs/SongReviewListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SongWhereInput", {
  isAbstract: true
})
export class SongWhereInput {
  @TypeGraphQL.Field(_type => [SongWhereInput], {
    nullable: true
  })
  AND?: SongWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongWhereInput], {
    nullable: true
  })
  OR?: SongWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongWhereInput], {
    nullable: true
  })
  NOT?: SongWhereInput[] | undefined;

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
  poster?: StringFilter | undefined;

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

  @TypeGraphQL.Field(_type => ArtistInSongListRelationFilter, {
    nullable: true
  })
  artists?: ArtistInSongListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SongInShowListRelationFilter, {
    nullable: true
  })
  songInShow?: SongInShowListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SongInMovieListRelationFilter, {
    nullable: true
  })
  songInMovie?: SongInMovieListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => GenreListRelationFilter, {
    nullable: true
  })
  genres?: GenreListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SongReviewListRelationFilter, {
    nullable: true
  })
  reviews?: SongReviewListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SongLikeListRelationFilter, {
    nullable: true
  })
  likes?: SongLikeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
