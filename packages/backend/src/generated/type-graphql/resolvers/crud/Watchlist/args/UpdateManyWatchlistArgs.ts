import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WatchlistUpdateManyMutationInput } from "../../../inputs/WatchlistUpdateManyMutationInput";
import { WatchlistWhereInput } from "../../../inputs/WatchlistWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyWatchlistArgs {
  @TypeGraphQL.Field(_type => WatchlistUpdateManyMutationInput, {
    nullable: false
  })
  data!: WatchlistUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => WatchlistWhereInput, {
    nullable: true
  })
  where?: WatchlistWhereInput | undefined;
}
