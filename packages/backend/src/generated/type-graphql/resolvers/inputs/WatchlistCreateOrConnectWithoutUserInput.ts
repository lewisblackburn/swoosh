import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WatchlistCreateWithoutUserInput } from "../inputs/WatchlistCreateWithoutUserInput";
import { WatchlistWhereUniqueInput } from "../inputs/WatchlistWhereUniqueInput";

@TypeGraphQL.InputType("WatchlistCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class WatchlistCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => WatchlistWhereUniqueInput, {
    nullable: false
  })
  where!: WatchlistWhereUniqueInput;

  @TypeGraphQL.Field(_type => WatchlistCreateWithoutUserInput, {
    nullable: false
  })
  create!: WatchlistCreateWithoutUserInput;
}
