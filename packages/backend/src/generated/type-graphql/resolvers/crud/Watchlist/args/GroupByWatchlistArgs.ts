import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WatchlistOrderByWithAggregationInput } from "../../../inputs/WatchlistOrderByWithAggregationInput";
import { WatchlistScalarWhereWithAggregatesInput } from "../../../inputs/WatchlistScalarWhereWithAggregatesInput";
import { WatchlistWhereInput } from "../../../inputs/WatchlistWhereInput";
import { WatchlistScalarFieldEnum } from "../../../../enums/WatchlistScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByWatchlistArgs {
  @TypeGraphQL.Field(_type => WatchlistWhereInput, {
    nullable: true
  })
  where?: WatchlistWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WatchlistOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: WatchlistOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [WatchlistScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "createdAt">;

  @TypeGraphQL.Field(_type => WatchlistScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: WatchlistScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
