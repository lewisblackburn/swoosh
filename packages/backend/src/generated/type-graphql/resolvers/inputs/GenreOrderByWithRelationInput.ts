import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookOrderByRelationAggregateInput } from "../inputs/BookOrderByRelationAggregateInput";
import { MovieOrderByRelationAggregateInput } from "../inputs/MovieOrderByRelationAggregateInput";
import { ShowOrderByRelationAggregateInput } from "../inputs/ShowOrderByRelationAggregateInput";
import { SongOrderByRelationAggregateInput } from "../inputs/SongOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class GenreOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MovieOrderByRelationAggregateInput, {
    nullable: true
  })
  movies?: MovieOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShowOrderByRelationAggregateInput, {
    nullable: true
  })
  shows?: ShowOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongOrderByRelationAggregateInput, {
    nullable: true
  })
  songs?: SongOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookOrderByRelationAggregateInput, {
    nullable: true
  })
  books?: BookOrderByRelationAggregateInput | undefined;
}
