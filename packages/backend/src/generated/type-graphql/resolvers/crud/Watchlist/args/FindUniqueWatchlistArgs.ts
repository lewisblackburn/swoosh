import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WatchlistWhereUniqueInput } from "../../../inputs/WatchlistWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueWatchlistArgs {
  @TypeGraphQL.Field(_type => WatchlistWhereUniqueInput, {
    nullable: false
  })
  where!: WatchlistWhereUniqueInput;
}
