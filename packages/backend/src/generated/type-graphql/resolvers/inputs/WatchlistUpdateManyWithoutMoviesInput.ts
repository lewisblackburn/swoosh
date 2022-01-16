import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WatchlistCreateOrConnectWithoutMoviesInput } from "../inputs/WatchlistCreateOrConnectWithoutMoviesInput";
import { WatchlistCreateWithoutMoviesInput } from "../inputs/WatchlistCreateWithoutMoviesInput";
import { WatchlistScalarWhereInput } from "../inputs/WatchlistScalarWhereInput";
import { WatchlistUpdateManyWithWhereWithoutMoviesInput } from "../inputs/WatchlistUpdateManyWithWhereWithoutMoviesInput";
import { WatchlistUpdateWithWhereUniqueWithoutMoviesInput } from "../inputs/WatchlistUpdateWithWhereUniqueWithoutMoviesInput";
import { WatchlistUpsertWithWhereUniqueWithoutMoviesInput } from "../inputs/WatchlistUpsertWithWhereUniqueWithoutMoviesInput";
import { WatchlistWhereUniqueInput } from "../inputs/WatchlistWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class WatchlistUpdateManyWithoutMoviesInput {
  @TypeGraphQL.Field(_type => [WatchlistCreateWithoutMoviesInput], {
    nullable: true
  })
  create?: WatchlistCreateWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WatchlistCreateOrConnectWithoutMoviesInput], {
    nullable: true
  })
  connectOrCreate?: WatchlistCreateOrConnectWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WatchlistUpsertWithWhereUniqueWithoutMoviesInput], {
    nullable: true
  })
  upsert?: WatchlistUpsertWithWhereUniqueWithoutMoviesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [WatchlistUpdateWithWhereUniqueWithoutMoviesInput], {
    nullable: true
  })
  update?: WatchlistUpdateWithWhereUniqueWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WatchlistUpdateManyWithWhereWithoutMoviesInput], {
    nullable: true
  })
  updateMany?: WatchlistUpdateManyWithWhereWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WatchlistScalarWhereInput], {
    nullable: true
  })
  deleteMany?: WatchlistScalarWhereInput[] | undefined;
}
