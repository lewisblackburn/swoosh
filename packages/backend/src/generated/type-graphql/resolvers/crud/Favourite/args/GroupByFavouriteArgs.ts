import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FavouriteOrderByWithAggregationInput } from "../../../inputs/FavouriteOrderByWithAggregationInput";
import { FavouriteScalarWhereWithAggregatesInput } from "../../../inputs/FavouriteScalarWhereWithAggregatesInput";
import { FavouriteWhereInput } from "../../../inputs/FavouriteWhereInput";
import { FavouriteScalarFieldEnum } from "../../../../enums/FavouriteScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFavouriteArgs {
  @TypeGraphQL.Field(_type => FavouriteWhereInput, {
    nullable: true
  })
  where?: FavouriteWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FavouriteOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: FavouriteOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId">;

  @TypeGraphQL.Field(_type => FavouriteScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: FavouriteScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
