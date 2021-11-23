import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateManyUserInputEnvelope } from "../inputs/SongCreateManyUserInputEnvelope";
import { SongCreateOrConnectWithoutUserInput } from "../inputs/SongCreateOrConnectWithoutUserInput";
import { SongCreateWithoutUserInput } from "../inputs/SongCreateWithoutUserInput";
import { SongScalarWhereInput } from "../inputs/SongScalarWhereInput";
import { SongUpdateManyWithWhereWithoutUserInput } from "../inputs/SongUpdateManyWithWhereWithoutUserInput";
import { SongUpdateWithWhereUniqueWithoutUserInput } from "../inputs/SongUpdateWithWhereUniqueWithoutUserInput";
import { SongUpsertWithWhereUniqueWithoutUserInput } from "../inputs/SongUpsertWithWhereUniqueWithoutUserInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [SongCreateWithoutUserInput], {
    nullable: true
  })
  create?: SongCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: SongUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => SongCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: SongCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  connect?: SongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  set?: SongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  delete?: SongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: SongUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: SongUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SongScalarWhereInput[] | undefined;
}
