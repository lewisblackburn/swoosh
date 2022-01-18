import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WatchlistCreateWithoutUserInput } from "../inputs/WatchlistCreateWithoutUserInput";
import { WatchlistUpdateWithoutUserInput } from "../inputs/WatchlistUpdateWithoutUserInput";

@TypeGraphQL.InputType("WatchlistUpsertWithoutUserInput", {
  isAbstract: true
})
export class WatchlistUpsertWithoutUserInput {
  @TypeGraphQL.Field(_type => WatchlistUpdateWithoutUserInput, {
    nullable: false
  })
  update!: WatchlistUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => WatchlistCreateWithoutUserInput, {
    nullable: false
  })
  create!: WatchlistCreateWithoutUserInput;
}
