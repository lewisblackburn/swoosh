import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongInShowCreateManyShowInputEnvelope } from "../inputs/SongInShowCreateManyShowInputEnvelope";
import { SongInShowCreateOrConnectWithoutShowInput } from "../inputs/SongInShowCreateOrConnectWithoutShowInput";
import { SongInShowCreateWithoutShowInput } from "../inputs/SongInShowCreateWithoutShowInput";
import { SongInShowScalarWhereInput } from "../inputs/SongInShowScalarWhereInput";
import { SongInShowUpdateManyWithWhereWithoutShowInput } from "../inputs/SongInShowUpdateManyWithWhereWithoutShowInput";
import { SongInShowUpdateWithWhereUniqueWithoutShowInput } from "../inputs/SongInShowUpdateWithWhereUniqueWithoutShowInput";
import { SongInShowUpsertWithWhereUniqueWithoutShowInput } from "../inputs/SongInShowUpsertWithWhereUniqueWithoutShowInput";
import { SongInShowWhereUniqueInput } from "../inputs/SongInShowWhereUniqueInput";

@TypeGraphQL.InputType("SongInShowUpdateManyWithoutShowInput", {
  isAbstract: true
})
export class SongInShowUpdateManyWithoutShowInput {
  @TypeGraphQL.Field(_type => [SongInShowCreateWithoutShowInput], {
    nullable: true
  })
  create?: SongInShowCreateWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInShowCreateOrConnectWithoutShowInput], {
    nullable: true
  })
  connectOrCreate?: SongInShowCreateOrConnectWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInShowUpsertWithWhereUniqueWithoutShowInput], {
    nullable: true
  })
  upsert?: SongInShowUpsertWithWhereUniqueWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => SongInShowCreateManyShowInputEnvelope, {
    nullable: true
  })
  createMany?: SongInShowCreateManyShowInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [SongInShowUpdateWithWhereUniqueWithoutShowInput], {
    nullable: true
  })
  update?: SongInShowUpdateWithWhereUniqueWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInShowUpdateManyWithWhereWithoutShowInput], {
    nullable: true
  })
  updateMany?: SongInShowUpdateManyWithWhereWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInShowScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SongInShowScalarWhereInput[] | undefined;
}
