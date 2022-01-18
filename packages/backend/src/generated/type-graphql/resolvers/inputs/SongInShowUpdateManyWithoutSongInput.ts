import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongInShowCreateManySongInputEnvelope } from "../inputs/SongInShowCreateManySongInputEnvelope";
import { SongInShowCreateOrConnectWithoutSongInput } from "../inputs/SongInShowCreateOrConnectWithoutSongInput";
import { SongInShowCreateWithoutSongInput } from "../inputs/SongInShowCreateWithoutSongInput";
import { SongInShowScalarWhereInput } from "../inputs/SongInShowScalarWhereInput";
import { SongInShowUpdateManyWithWhereWithoutSongInput } from "../inputs/SongInShowUpdateManyWithWhereWithoutSongInput";
import { SongInShowUpdateWithWhereUniqueWithoutSongInput } from "../inputs/SongInShowUpdateWithWhereUniqueWithoutSongInput";
import { SongInShowUpsertWithWhereUniqueWithoutSongInput } from "../inputs/SongInShowUpsertWithWhereUniqueWithoutSongInput";
import { SongInShowWhereUniqueInput } from "../inputs/SongInShowWhereUniqueInput";

@TypeGraphQL.InputType("SongInShowUpdateManyWithoutSongInput", {
  isAbstract: true
})
export class SongInShowUpdateManyWithoutSongInput {
  @TypeGraphQL.Field(_type => [SongInShowCreateWithoutSongInput], {
    nullable: true
  })
  create?: SongInShowCreateWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInShowCreateOrConnectWithoutSongInput], {
    nullable: true
  })
  connectOrCreate?: SongInShowCreateOrConnectWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInShowUpsertWithWhereUniqueWithoutSongInput], {
    nullable: true
  })
  upsert?: SongInShowUpsertWithWhereUniqueWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => SongInShowCreateManySongInputEnvelope, {
    nullable: true
  })
  createMany?: SongInShowCreateManySongInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SongInShowWhereUniqueInput], {
    nullable: true
  })
  set?: SongInShowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInShowWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SongInShowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInShowWhereUniqueInput], {
    nullable: true
  })
  delete?: SongInShowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInShowWhereUniqueInput], {
    nullable: true
  })
  connect?: SongInShowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInShowUpdateWithWhereUniqueWithoutSongInput], {
    nullable: true
  })
  update?: SongInShowUpdateWithWhereUniqueWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInShowUpdateManyWithWhereWithoutSongInput], {
    nullable: true
  })
  updateMany?: SongInShowUpdateManyWithWhereWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInShowScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SongInShowScalarWhereInput[] | undefined;
}
