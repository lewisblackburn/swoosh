import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WatchlistCreateOrConnectWithoutUserInput } from "../inputs/WatchlistCreateOrConnectWithoutUserInput";
import { WatchlistCreateWithoutUserInput } from "../inputs/WatchlistCreateWithoutUserInput";
import { WatchlistUpdateWithoutUserInput } from "../inputs/WatchlistUpdateWithoutUserInput";
import { WatchlistUpsertWithoutUserInput } from "../inputs/WatchlistUpsertWithoutUserInput";
import { WatchlistWhereUniqueInput } from "../inputs/WatchlistWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class WatchlistUpdateOneWithoutUserInput {
  @TypeGraphQL.Field(_type => WatchlistCreateWithoutUserInput, {
    nullable: true
  })
  create?: WatchlistCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => WatchlistCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: WatchlistCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => WatchlistUpsertWithoutUserInput, {
    nullable: true
  })
  upsert?: WatchlistUpsertWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => WatchlistWhereUniqueInput, {
    nullable: true
  })
  connect?: WatchlistWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => WatchlistUpdateWithoutUserInput, {
    nullable: true
  })
  update?: WatchlistUpdateWithoutUserInput | undefined;
}
