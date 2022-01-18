import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WatchlistUpdateWithoutShowsInput } from "../inputs/WatchlistUpdateWithoutShowsInput";
import { WatchlistWhereUniqueInput } from "../inputs/WatchlistWhereUniqueInput";

@TypeGraphQL.InputType("WatchlistUpdateWithWhereUniqueWithoutShowsInput", {
  isAbstract: true
})
export class WatchlistUpdateWithWhereUniqueWithoutShowsInput {
  @TypeGraphQL.Field(_type => WatchlistWhereUniqueInput, {
    nullable: false
  })
  where!: WatchlistWhereUniqueInput;

  @TypeGraphQL.Field(_type => WatchlistUpdateWithoutShowsInput, {
    nullable: false
  })
  data!: WatchlistUpdateWithoutShowsInput;
}
