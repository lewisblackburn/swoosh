import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WatchlistCreateWithoutMoviesInput } from "../inputs/WatchlistCreateWithoutMoviesInput";
import { WatchlistWhereUniqueInput } from "../inputs/WatchlistWhereUniqueInput";

@TypeGraphQL.InputType("WatchlistCreateOrConnectWithoutMoviesInput", {
  isAbstract: true
})
export class WatchlistCreateOrConnectWithoutMoviesInput {
  @TypeGraphQL.Field(_type => WatchlistWhereUniqueInput, {
    nullable: false
  })
  where!: WatchlistWhereUniqueInput;

  @TypeGraphQL.Field(_type => WatchlistCreateWithoutMoviesInput, {
    nullable: false
  })
  create!: WatchlistCreateWithoutMoviesInput;
}
