import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WatchlistCreateManyInput } from "../../../inputs/WatchlistCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyWatchlistArgs {
  @TypeGraphQL.Field(_type => [WatchlistCreateManyInput], {
    nullable: false
  })
  data!: WatchlistCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
