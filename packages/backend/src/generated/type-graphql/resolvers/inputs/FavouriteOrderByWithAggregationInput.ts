import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavouriteAvgOrderByAggregateInput } from "../inputs/FavouriteAvgOrderByAggregateInput";
import { FavouriteCountOrderByAggregateInput } from "../inputs/FavouriteCountOrderByAggregateInput";
import { FavouriteMaxOrderByAggregateInput } from "../inputs/FavouriteMaxOrderByAggregateInput";
import { FavouriteMinOrderByAggregateInput } from "../inputs/FavouriteMinOrderByAggregateInput";
import { FavouriteSumOrderByAggregateInput } from "../inputs/FavouriteSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FavouriteOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FavouriteCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: FavouriteCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FavouriteAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: FavouriteAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FavouriteMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: FavouriteMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FavouriteMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: FavouriteMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FavouriteSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: FavouriteSumOrderByAggregateInput | undefined;
}
