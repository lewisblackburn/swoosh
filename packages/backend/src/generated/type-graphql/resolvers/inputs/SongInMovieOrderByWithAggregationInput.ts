import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongInMovieAvgOrderByAggregateInput } from "../inputs/SongInMovieAvgOrderByAggregateInput";
import { SongInMovieCountOrderByAggregateInput } from "../inputs/SongInMovieCountOrderByAggregateInput";
import { SongInMovieMaxOrderByAggregateInput } from "../inputs/SongInMovieMaxOrderByAggregateInput";
import { SongInMovieMinOrderByAggregateInput } from "../inputs/SongInMovieMinOrderByAggregateInput";
import { SongInMovieSumOrderByAggregateInput } from "../inputs/SongInMovieSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SongInMovieOrderByWithAggregationInput", {
  isAbstract: true
})
export class SongInMovieOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  timestamp?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  songId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  movieId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SongInMovieCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SongInMovieCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongInMovieAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SongInMovieAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongInMovieMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SongInMovieMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongInMovieMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SongInMovieMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongInMovieSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SongInMovieSumOrderByAggregateInput | undefined;
}
