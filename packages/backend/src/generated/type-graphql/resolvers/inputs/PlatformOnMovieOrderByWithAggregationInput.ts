import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformOnMovieAvgOrderByAggregateInput } from "../inputs/PlatformOnMovieAvgOrderByAggregateInput";
import { PlatformOnMovieCountOrderByAggregateInput } from "../inputs/PlatformOnMovieCountOrderByAggregateInput";
import { PlatformOnMovieMaxOrderByAggregateInput } from "../inputs/PlatformOnMovieMaxOrderByAggregateInput";
import { PlatformOnMovieMinOrderByAggregateInput } from "../inputs/PlatformOnMovieMinOrderByAggregateInput";
import { PlatformOnMovieSumOrderByAggregateInput } from "../inputs/PlatformOnMovieSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnMovieOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  price?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  platformId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  movieId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PlatformOnMovieCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PlatformOnMovieCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlatformOnMovieAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PlatformOnMovieAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlatformOnMovieMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PlatformOnMovieMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlatformOnMovieMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PlatformOnMovieMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlatformOnMovieSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PlatformOnMovieSumOrderByAggregateInput | undefined;
}
