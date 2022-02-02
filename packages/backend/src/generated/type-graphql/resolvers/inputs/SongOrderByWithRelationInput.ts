import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreOrderByRelationAggregateInput } from "../inputs/GenreOrderByRelationAggregateInput";
import { PersonOrderByRelationAggregateInput } from "../inputs/PersonOrderByRelationAggregateInput";
import { SongInMovieOrderByRelationAggregateInput } from "../inputs/SongInMovieOrderByRelationAggregateInput";
import { SongInShowOrderByRelationAggregateInput } from "../inputs/SongInShowOrderByRelationAggregateInput";
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

  @TypeGraphQL.Field(_type => PersonOrderByRelationAggregateInput, {
    nullable: true
  })
  artists?: PersonOrderByRelationAggregateInput | undefined;

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

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;
}
