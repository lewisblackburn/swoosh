import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WatchlistUpdateWithoutMoviesInput } from "../inputs/WatchlistUpdateWithoutMoviesInput";
import { WatchlistWhereUniqueInput } from "../inputs/WatchlistWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class WatchlistUpdateWithWhereUniqueWithoutMoviesInput {
  @TypeGraphQL.Field(_type => WatchlistWhereUniqueInput, {
    nullable: false
  })
  where!: WatchlistWhereUniqueInput;

  @TypeGraphQL.Field(_type => WatchlistUpdateWithoutMoviesInput, {
    nullable: false
  })
  data!: WatchlistUpdateWithoutMoviesInput;
}
