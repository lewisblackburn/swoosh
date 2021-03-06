import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInSongOrderByRelationAggregateInput } from "../inputs/ArtistInSongOrderByRelationAggregateInput";
import { GenreOrderByRelationAggregateInput } from "../inputs/GenreOrderByRelationAggregateInput";
import { SongInMovieOrderByRelationAggregateInput } from "../inputs/SongInMovieOrderByRelationAggregateInput";
import { SongInShowOrderByRelationAggregateInput } from "../inputs/SongInShowOrderByRelationAggregateInput";
import { SongLikeOrderByRelationAggregateInput } from "../inputs/SongLikeOrderByRelationAggregateInput";
import { SongReviewOrderByRelationAggregateInput } from "../inputs/SongReviewOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SongOrderByWithRelationInput", {
  isAbstract: true
})
export class SongOrderByWithRelationInput {
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
  poster?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => ArtistInSongOrderByRelationAggregateInput, {
    nullable: true
  })
  artists?: ArtistInSongOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongInShowOrderByRelationAggregateInput, {
    nullable: true
  })
  songInShow?: SongInShowOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongInMovieOrderByRelationAggregateInput, {
    nullable: true
  })
  songInMovie?: SongInMovieOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GenreOrderByRelationAggregateInput, {
    nullable: true
  })
  genres?: GenreOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongReviewOrderByRelationAggregateInput, {
    nullable: true
  })
  reviews?: SongReviewOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongLikeOrderByRelationAggregateInput, {
    nullable: true
  })
  likes?: SongLikeOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;
}
