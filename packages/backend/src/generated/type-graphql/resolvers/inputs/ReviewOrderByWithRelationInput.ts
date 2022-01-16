import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookOrderByWithRelationInput } from "../inputs/BookOrderByWithRelationInput";
import { MovieOrderByWithRelationInput } from "../inputs/MovieOrderByWithRelationInput";
import { ShowOrderByWithRelationInput } from "../inputs/ShowOrderByWithRelationInput";
import { SongOrderByWithRelationInput } from "../inputs/SongOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { VoteOrderByRelationAggregateInput } from "../inputs/VoteOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReviewOrderByWithRelationInput {
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
  review?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true
  })
  user?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MovieOrderByWithRelationInput, {
    nullable: true
  })
  movie?: MovieOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  movieId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ShowOrderByWithRelationInput, {
    nullable: true
  })
  show?: ShowOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  showId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BookOrderByWithRelationInput, {
    nullable: true
  })
  book?: BookOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  bookId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SongOrderByWithRelationInput, {
    nullable: true
  })
  song?: SongOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  songId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => VoteOrderByRelationAggregateInput, {
    nullable: true
  })
  vote?: VoteOrderByRelationAggregateInput | undefined;
}
