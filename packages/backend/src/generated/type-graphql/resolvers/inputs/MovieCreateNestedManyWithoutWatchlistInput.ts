import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutWatchlistInput } from "../inputs/MovieCreateOrConnectWithoutWatchlistInput";
import { MovieCreateWithoutWatchlistInput } from "../inputs/MovieCreateWithoutWatchlistInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieCreateNestedManyWithoutWatchlistInput", {
  isAbstract: true
})
export class MovieCreateNestedManyWithoutWatchlistInput {
  @TypeGraphQL.Field(_type => [MovieCreateWithoutWatchlistInput], {
    nullable: true
  })
  create?: MovieCreateWithoutWatchlistInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCreateOrConnectWithoutWatchlistInput], {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutWatchlistInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieWhereUniqueInput[] | undefined;
}
