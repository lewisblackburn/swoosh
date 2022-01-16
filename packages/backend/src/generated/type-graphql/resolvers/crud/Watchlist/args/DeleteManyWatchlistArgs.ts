import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WatchlistWhereInput } from "../../../inputs/WatchlistWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyWatchlistArgs {
  @TypeGraphQL.Field(_type => WatchlistWhereInput, {
    nullable: true
  })
  where?: WatchlistWhereInput | undefined;
}
