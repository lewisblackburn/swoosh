import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInMovieOrderByRelationAggregateInput } from "../inputs/ActorInMovieOrderByRelationAggregateInput";
import { ActorInShowOrderByRelationAggregateInput } from "../inputs/ActorInShowOrderByRelationAggregateInput";
import { BookOrderByRelationAggregateInput } from "../inputs/BookOrderByRelationAggregateInput";
import { SongOrderByRelationAggregateInput } from "../inputs/SongOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PersonOrderByWithRelationInput", {
  isAbstract: true
})
export class PersonOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  career?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  thumbnail?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  bio?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  age?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ActorInMovieOrderByRelationAggregateInput, {
    nullable: true
  })
  movies?: ActorInMovieOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ActorInShowOrderByRelationAggregateInput, {
    nullable: true
  })
  shows?: ActorInShowOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookOrderByRelationAggregateInput, {
    nullable: true
  })
  books?: BookOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongOrderByRelationAggregateInput, {
    nullable: true
  })
  songs?: SongOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;
}
