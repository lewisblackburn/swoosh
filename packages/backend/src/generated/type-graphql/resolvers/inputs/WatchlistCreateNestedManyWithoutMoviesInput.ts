import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WatchlistCreateOrConnectWithoutMoviesInput } from "../inputs/WatchlistCreateOrConnectWithoutMoviesInput";
import { WatchlistCreateWithoutMoviesInput } from "../inputs/WatchlistCreateWithoutMoviesInput";
import { WatchlistWhereUniqueInput } from "../inputs/WatchlistWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class WatchlistCreateNestedManyWithoutMoviesInput {
  @TypeGraphQL.Field(_type => [WatchlistCreateWithoutMoviesInput], {
    nullable: true
  })
  create?: WatchlistCreateWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WatchlistCreateOrConnectWithoutMoviesInput], {
    nullable: true
  })
  connectOrCreate?: WatchlistCreateOrConnectWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WatchlistWhereUniqueInput], {
    nullable: true
  })
  connect?: WatchlistWhereUniqueInput[] | undefined;
}
