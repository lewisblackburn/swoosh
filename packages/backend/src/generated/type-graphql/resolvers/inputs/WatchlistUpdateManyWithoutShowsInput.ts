import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WatchlistCreateOrConnectWithoutShowsInput } from "../inputs/WatchlistCreateOrConnectWithoutShowsInput";
import { WatchlistCreateWithoutShowsInput } from "../inputs/WatchlistCreateWithoutShowsInput";
import { WatchlistScalarWhereInput } from "../inputs/WatchlistScalarWhereInput";
import { WatchlistUpdateManyWithWhereWithoutShowsInput } from "../inputs/WatchlistUpdateManyWithWhereWithoutShowsInput";
import { WatchlistUpdateWithWhereUniqueWithoutShowsInput } from "../inputs/WatchlistUpdateWithWhereUniqueWithoutShowsInput";
import { WatchlistUpsertWithWhereUniqueWithoutShowsInput } from "../inputs/WatchlistUpsertWithWhereUniqueWithoutShowsInput";
import { WatchlistWhereUniqueInput } from "../inputs/WatchlistWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class WatchlistUpdateManyWithoutShowsInput {
  @TypeGraphQL.Field(_type => [WatchlistCreateWithoutShowsInput], {
    nullable: true
  })
  create?: WatchlistCreateWithoutShowsInput[] | undefined;

  @TypeGraphQL.Field(_type => [WatchlistCreateOrConnectWithoutShowsInput], {
    nullable: true
  })
  connectOrCreate?: WatchlistCreateOrConnectWithoutShowsInput[] | undefined;

  @TypeGraphQL.Field(_type => [WatchlistUpsertWithWhereUniqueWithoutShowsInput], {
    nullable: true
  })
  upsert?: WatchlistUpsertWithWhereUniqueWithoutShowsInput[] | undefined;

  @TypeGraphQL.Field(_type => [WatchlistWhereUniqueInput], {
    nullable: true
  })
  connect?: WatchlistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WatchlistWhereUniqueInput], {
    nullable: true
  })
  set?: WatchlistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WatchlistWhereUniqueInput], {
    nullable: true
  })
  disconnect?: WatchlistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WatchlistWhereUniqueInput], {
    nullable: true
  })
  delete?: WatchlistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WatchlistUpdateWithWhereUniqueWithoutShowsInput], {
    nullable: true
  })
  update?: WatchlistUpdateWithWhereUniqueWithoutShowsInput[] | undefined;

  @TypeGraphQL.Field(_type => [WatchlistUpdateManyWithWhereWithoutShowsInput], {
    nullable: true
  })
  updateMany?: WatchlistUpdateManyWithWhereWithoutShowsInput[] | undefined;

  @TypeGraphQL.Field(_type => [WatchlistScalarWhereInput], {
    nullable: true
  })
  deleteMany?: WatchlistScalarWhereInput[] | undefined;
}
