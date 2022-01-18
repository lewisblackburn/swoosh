import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutWatchlistInput } from "../inputs/MovieCreateWithoutWatchlistInput";
import { MovieUpdateWithoutWatchlistInput } from "../inputs/MovieUpdateWithoutWatchlistInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieUpsertWithWhereUniqueWithoutWatchlistInput", {
  isAbstract: true
})
export class MovieUpsertWithWhereUniqueWithoutWatchlistInput {
  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieUpdateWithoutWatchlistInput, {
    nullable: false
  })
  update!: MovieUpdateWithoutWatchlistInput;

  @TypeGraphQL.Field(_type => MovieCreateWithoutWatchlistInput, {
    nullable: false
  })
  create!: MovieCreateWithoutWatchlistInput;
}
