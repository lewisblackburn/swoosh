import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WatchlistCreateOrConnectWithoutShowsInput } from "../inputs/WatchlistCreateOrConnectWithoutShowsInput";
import { WatchlistCreateWithoutShowsInput } from "../inputs/WatchlistCreateWithoutShowsInput";
import { WatchlistWhereUniqueInput } from "../inputs/WatchlistWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class WatchlistCreateNestedManyWithoutShowsInput {
  @TypeGraphQL.Field(_type => [WatchlistCreateWithoutShowsInput], {
    nullable: true
  })
  create?: WatchlistCreateWithoutShowsInput[] | undefined;

  @TypeGraphQL.Field(_type => [WatchlistCreateOrConnectWithoutShowsInput], {
    nullable: true
  })
  connectOrCreate?: WatchlistCreateOrConnectWithoutShowsInput[] | undefined;

  @TypeGraphQL.Field(_type => [WatchlistWhereUniqueInput], {
    nullable: true
  })
  connect?: WatchlistWhereUniqueInput[] | undefined;
}
