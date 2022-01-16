import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WatchlistCreateInput } from "../../../inputs/WatchlistCreateInput";
import { WatchlistUpdateInput } from "../../../inputs/WatchlistUpdateInput";
import { WatchlistWhereUniqueInput } from "../../../inputs/WatchlistWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertWatchlistArgs {
  @TypeGraphQL.Field(_type => WatchlistWhereUniqueInput, {
    nullable: false
  })
  where!: WatchlistWhereUniqueInput;

  @TypeGraphQL.Field(_type => WatchlistCreateInput, {
    nullable: false
  })
  create!: WatchlistCreateInput;

  @TypeGraphQL.Field(_type => WatchlistUpdateInput, {
    nullable: false
  })
  update!: WatchlistUpdateInput;
}
