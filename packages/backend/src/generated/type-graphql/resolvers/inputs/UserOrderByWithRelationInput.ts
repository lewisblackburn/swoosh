import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookOrderByRelationAggregateInput } from "../inputs/BookOrderByRelationAggregateInput";
import { MovieOrderByRelationAggregateInput } from "../inputs/MovieOrderByRelationAggregateInput";
import { SongOrderByRelationAggregateInput } from "../inputs/SongOrderByRelationAggregateInput";
import { UserOrderByRelationAggregateInput } from "../inputs/UserOrderByRelationAggregateInput";
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

  @TypeGraphQL.Field(_type => MovieOrderByRelationAggregateInput, {
    nullable: true
  })
  movies?: MovieOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookOrderByRelationAggregateInput, {
    nullable: true
  })
  books?: BookOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongOrderByRelationAggregateInput, {
    nullable: true
  })
  songs?: SongOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserOrderByRelationAggregateInput, {
    nullable: true
  })
  following?: UserOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserOrderByRelationAggregateInput, {
    nullable: true
  })
  followers?: UserOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;
}
