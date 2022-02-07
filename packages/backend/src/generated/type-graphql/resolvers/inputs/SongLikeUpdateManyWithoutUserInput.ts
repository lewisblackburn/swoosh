import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongLikeCreateManyUserInputEnvelope } from "../inputs/SongLikeCreateManyUserInputEnvelope";
import { SongLikeCreateOrConnectWithoutUserInput } from "../inputs/SongLikeCreateOrConnectWithoutUserInput";
import { SongLikeCreateWithoutUserInput } from "../inputs/SongLikeCreateWithoutUserInput";
import { SongLikeScalarWhereInput } from "../inputs/SongLikeScalarWhereInput";
import { SongLikeUpdateManyWithWhereWithoutUserInput } from "../inputs/SongLikeUpdateManyWithWhereWithoutUserInput";
import { SongLikeUpdateWithWhereUniqueWithoutUserInput } from "../inputs/SongLikeUpdateWithWhereUniqueWithoutUserInput";
import { SongLikeUpsertWithWhereUniqueWithoutUserInput } from "../inputs/SongLikeUpsertWithWhereUniqueWithoutUserInput";
import { SongLikeWhereUniqueInput } from "../inputs/SongLikeWhereUniqueInput";

@TypeGraphQL.InputType("SongLikeUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class SongLikeUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [SongLikeCreateWithoutUserInput], {
    nullable: true
  })
  create?: SongLikeCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongLikeCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: SongLikeCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongLikeUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: SongLikeUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => SongLikeCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: SongLikeCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SongLikeWhereUniqueInput], {
    nullable: true
  })
  set?: SongLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongLikeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SongLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongLikeWhereUniqueInput], {
    nullable: true
  })
  delete?: SongLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongLikeWhereUniqueInput], {
    nullable: true
  })
  connect?: SongLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongLikeUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: SongLikeUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongLikeUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: SongLikeUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongLikeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SongLikeScalarWhereInput[] | undefined;
}
