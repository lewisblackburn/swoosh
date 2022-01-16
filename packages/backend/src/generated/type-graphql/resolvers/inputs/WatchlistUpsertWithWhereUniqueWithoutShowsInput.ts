import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WatchlistCreateWithoutShowsInput } from "../inputs/WatchlistCreateWithoutShowsInput";
import { WatchlistUpdateWithoutShowsInput } from "../inputs/WatchlistUpdateWithoutShowsInput";
import { WatchlistWhereUniqueInput } from "../inputs/WatchlistWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class WatchlistUpsertWithWhereUniqueWithoutShowsInput {
  @TypeGraphQL.Field(_type => WatchlistWhereUniqueInput, {
    nullable: false
  })
  where!: WatchlistWhereUniqueInput;

  @TypeGraphQL.Field(_type => WatchlistUpdateWithoutShowsInput, {
    nullable: false
  })
  update!: WatchlistUpdateWithoutShowsInput;

  @TypeGraphQL.Field(_type => WatchlistCreateWithoutShowsInput, {
    nullable: false
  })
  create!: WatchlistCreateWithoutShowsInput;
}
