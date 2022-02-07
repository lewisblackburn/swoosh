import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInSongAvgOrderByAggregateInput } from "../inputs/ArtistInSongAvgOrderByAggregateInput";
import { ArtistInSongCountOrderByAggregateInput } from "../inputs/ArtistInSongCountOrderByAggregateInput";
import { ArtistInSongMaxOrderByAggregateInput } from "../inputs/ArtistInSongMaxOrderByAggregateInput";
import { ArtistInSongMinOrderByAggregateInput } from "../inputs/ArtistInSongMinOrderByAggregateInput";
import { ArtistInSongSumOrderByAggregateInput } from "../inputs/ArtistInSongSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ArtistInSongOrderByWithAggregationInput", {
  isAbstract: true
})
export class ArtistInSongOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  songId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  personId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  penname?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ArtistInSongCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ArtistInSongCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ArtistInSongAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ArtistInSongAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ArtistInSongMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ArtistInSongMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ArtistInSongMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ArtistInSongMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ArtistInSongSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ArtistInSongSumOrderByAggregateInput | undefined;
}
