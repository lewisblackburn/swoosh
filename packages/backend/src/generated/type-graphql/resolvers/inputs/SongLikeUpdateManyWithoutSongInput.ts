import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongLikeCreateManySongInputEnvelope } from "../inputs/SongLikeCreateManySongInputEnvelope";
import { SongLikeCreateOrConnectWithoutSongInput } from "../inputs/SongLikeCreateOrConnectWithoutSongInput";
import { SongLikeCreateWithoutSongInput } from "../inputs/SongLikeCreateWithoutSongInput";
import { SongLikeScalarWhereInput } from "../inputs/SongLikeScalarWhereInput";
import { SongLikeUpdateManyWithWhereWithoutSongInput } from "../inputs/SongLikeUpdateManyWithWhereWithoutSongInput";
import { SongLikeUpdateWithWhereUniqueWithoutSongInput } from "../inputs/SongLikeUpdateWithWhereUniqueWithoutSongInput";
import { SongLikeUpsertWithWhereUniqueWithoutSongInput } from "../inputs/SongLikeUpsertWithWhereUniqueWithoutSongInput";
import { SongLikeWhereUniqueInput } from "../inputs/SongLikeWhereUniqueInput";

@TypeGraphQL.InputType("SongLikeUpdateManyWithoutSongInput", {
  isAbstract: true
})
export class SongLikeUpdateManyWithoutSongInput {
  @TypeGraphQL.Field(_type => [SongLikeCreateWithoutSongInput], {
    nullable: true
  })
  create?: SongLikeCreateWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongLikeCreateOrConnectWithoutSongInput], {
    nullable: true
  })
  connectOrCreate?: SongLikeCreateOrConnectWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongLikeUpsertWithWhereUniqueWithoutSongInput], {
    nullable: true
  })
  upsert?: SongLikeUpsertWithWhereUniqueWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => SongLikeCreateManySongInputEnvelope, {
    nullable: true
  })
  createMany?: SongLikeCreateManySongInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [SongLikeUpdateWithWhereUniqueWithoutSongInput], {
    nullable: true
  })
  update?: SongLikeUpdateWithWhereUniqueWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongLikeUpdateManyWithWhereWithoutSongInput], {
    nullable: true
  })
  updateMany?: SongLikeUpdateManyWithWhereWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongLikeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SongLikeScalarWhereInput[] | undefined;
}
