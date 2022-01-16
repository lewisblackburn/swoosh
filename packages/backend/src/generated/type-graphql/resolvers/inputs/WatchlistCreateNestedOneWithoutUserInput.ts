import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WatchlistCreateOrConnectWithoutUserInput } from "../inputs/WatchlistCreateOrConnectWithoutUserInput";
import { WatchlistCreateWithoutUserInput } from "../inputs/WatchlistCreateWithoutUserInput";
import { WatchlistWhereUniqueInput } from "../inputs/WatchlistWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class WatchlistCreateNestedOneWithoutUserInput {
  @TypeGraphQL.Field(_type => WatchlistCreateWithoutUserInput, {
    nullable: true
  })
  create?: WatchlistCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => WatchlistCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: WatchlistCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => WatchlistWhereUniqueInput, {
    nullable: true
  })
  connect?: WatchlistWhereUniqueInput | undefined;
}
