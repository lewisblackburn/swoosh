import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateOrConnectWithoutWatchlistInput } from "../inputs/ShowCreateOrConnectWithoutWatchlistInput";
import { ShowCreateWithoutWatchlistInput } from "../inputs/ShowCreateWithoutWatchlistInput";
import { ShowScalarWhereInput } from "../inputs/ShowScalarWhereInput";
import { ShowUpdateManyWithWhereWithoutWatchlistInput } from "../inputs/ShowUpdateManyWithWhereWithoutWatchlistInput";
import { ShowUpdateWithWhereUniqueWithoutWatchlistInput } from "../inputs/ShowUpdateWithWhereUniqueWithoutWatchlistInput";
import { ShowUpsertWithWhereUniqueWithoutWatchlistInput } from "../inputs/ShowUpsertWithWhereUniqueWithoutWatchlistInput";
import { ShowWhereUniqueInput } from "../inputs/ShowWhereUniqueInput";

@TypeGraphQL.InputType("ShowUpdateManyWithoutWatchlistInput", {
  isAbstract: true
})
export class ShowUpdateManyWithoutWatchlistInput {
  @TypeGraphQL.Field(_type => [ShowCreateWithoutWatchlistInput], {
    nullable: true
  })
  create?: ShowCreateWithoutWatchlistInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowCreateOrConnectWithoutWatchlistInput], {
    nullable: true
  })
  connectOrCreate?: ShowCreateOrConnectWithoutWatchlistInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowUpsertWithWhereUniqueWithoutWatchlistInput], {
    nullable: true
  })
  upsert?: ShowUpsertWithWhereUniqueWithoutWatchlistInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowWhereUniqueInput], {
    nullable: true
  })
  set?: ShowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ShowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowWhereUniqueInput], {
    nullable: true
  })
  delete?: ShowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowWhereUniqueInput], {
    nullable: true
  })
  connect?: ShowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowUpdateWithWhereUniqueWithoutWatchlistInput], {
    nullable: true
  })
  update?: ShowUpdateWithWhereUniqueWithoutWatchlistInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowUpdateManyWithWhereWithoutWatchlistInput], {
    nullable: true
  })
  updateMany?: ShowUpdateManyWithWhereWithoutWatchlistInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ShowScalarWhereInput[] | undefined;
}
