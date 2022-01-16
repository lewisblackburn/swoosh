import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WatchlistOrderByWithRelationInput } from "../../../inputs/WatchlistOrderByWithRelationInput";
import { WatchlistWhereInput } from "../../../inputs/WatchlistWhereInput";
import { WatchlistWhereUniqueInput } from "../../../inputs/WatchlistWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateWatchlistArgs {
  @TypeGraphQL.Field(_type => WatchlistWhereInput, {
    nullable: true
  })
  where?: WatchlistWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WatchlistOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: WatchlistOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => WatchlistWhereUniqueInput, {
    nullable: true
  })
  cursor?: WatchlistWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
