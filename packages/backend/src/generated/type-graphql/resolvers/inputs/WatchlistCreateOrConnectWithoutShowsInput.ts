import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WatchlistCreateWithoutShowsInput } from "../inputs/WatchlistCreateWithoutShowsInput";
import { WatchlistWhereUniqueInput } from "../inputs/WatchlistWhereUniqueInput";

@TypeGraphQL.InputType("WatchlistCreateOrConnectWithoutShowsInput", {
  isAbstract: true
})
export class WatchlistCreateOrConnectWithoutShowsInput {
  @TypeGraphQL.Field(_type => WatchlistWhereUniqueInput, {
    nullable: false
  })
  where!: WatchlistWhereUniqueInput;

  @TypeGraphQL.Field(_type => WatchlistCreateWithoutShowsInput, {
    nullable: false
  })
  create!: WatchlistCreateWithoutShowsInput;
}
