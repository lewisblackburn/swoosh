import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WatchlistUpdateInput } from "../../../inputs/WatchlistUpdateInput";
import { WatchlistWhereUniqueInput } from "../../../inputs/WatchlistWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateWatchlistArgs {
  @TypeGraphQL.Field(_type => WatchlistUpdateInput, {
    nullable: false
  })
  data!: WatchlistUpdateInput;

  @TypeGraphQL.Field(_type => WatchlistWhereUniqueInput, {
    nullable: false
  })
  where!: WatchlistWhereUniqueInput;
}
