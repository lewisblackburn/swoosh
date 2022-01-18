import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WatchlistCreateWithoutMoviesInput } from "../inputs/WatchlistCreateWithoutMoviesInput";
import { WatchlistUpdateWithoutMoviesInput } from "../inputs/WatchlistUpdateWithoutMoviesInput";
import { WatchlistWhereUniqueInput } from "../inputs/WatchlistWhereUniqueInput";

@TypeGraphQL.InputType("WatchlistUpsertWithWhereUniqueWithoutMoviesInput", {
  isAbstract: true
})
export class WatchlistUpsertWithWhereUniqueWithoutMoviesInput {
  @TypeGraphQL.Field(_type => WatchlistWhereUniqueInput, {
    nullable: false
  })
  where!: WatchlistWhereUniqueInput;

  @TypeGraphQL.Field(_type => WatchlistUpdateWithoutMoviesInput, {
    nullable: false
  })
  update!: WatchlistUpdateWithoutMoviesInput;

  @TypeGraphQL.Field(_type => WatchlistCreateWithoutMoviesInput, {
    nullable: false
  })
  create!: WatchlistCreateWithoutMoviesInput;
}
