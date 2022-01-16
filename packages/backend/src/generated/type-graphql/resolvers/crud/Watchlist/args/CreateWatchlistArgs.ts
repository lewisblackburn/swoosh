import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WatchlistCreateInput } from "../../../inputs/WatchlistCreateInput";

@TypeGraphQL.ArgsType()
export class CreateWatchlistArgs {
  @TypeGraphQL.Field(_type => WatchlistCreateInput, {
    nullable: false
  })
  data!: WatchlistCreateInput;
}
