import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewCreateManySongInputEnvelope } from "../inputs/SongReviewCreateManySongInputEnvelope";
import { SongReviewCreateOrConnectWithoutSongInput } from "../inputs/SongReviewCreateOrConnectWithoutSongInput";
import { SongReviewCreateWithoutSongInput } from "../inputs/SongReviewCreateWithoutSongInput";
import { SongReviewScalarWhereInput } from "../inputs/SongReviewScalarWhereInput";
import { SongReviewUpdateManyWithWhereWithoutSongInput } from "../inputs/SongReviewUpdateManyWithWhereWithoutSongInput";
import { SongReviewUpdateWithWhereUniqueWithoutSongInput } from "../inputs/SongReviewUpdateWithWhereUniqueWithoutSongInput";
import { SongReviewUpsertWithWhereUniqueWithoutSongInput } from "../inputs/SongReviewUpsertWithWhereUniqueWithoutSongInput";
import { SongReviewWhereUniqueInput } from "../inputs/SongReviewWhereUniqueInput";

@TypeGraphQL.InputType("SongReviewUpdateManyWithoutSongInput", {
  isAbstract: true
})
export class SongReviewUpdateManyWithoutSongInput {
  @TypeGraphQL.Field(_type => [SongReviewCreateWithoutSongInput], {
    nullable: true
  })
  create?: SongReviewCreateWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewCreateOrConnectWithoutSongInput], {
    nullable: true
  })
  connectOrCreate?: SongReviewCreateOrConnectWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewUpsertWithWhereUniqueWithoutSongInput], {
    nullable: true
  })
  upsert?: SongReviewUpsertWithWhereUniqueWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => SongReviewCreateManySongInputEnvelope, {
    nullable: true
  })
  createMany?: SongReviewCreateManySongInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SongReviewWhereUniqueInput], {
    nullable: true
  })
  set?: SongReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SongReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewWhereUniqueInput], {
    nullable: true
  })
  delete?: SongReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewWhereUniqueInput], {
    nullable: true
  })
  connect?: SongReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewUpdateWithWhereUniqueWithoutSongInput], {
    nullable: true
  })
  update?: SongReviewUpdateWithWhereUniqueWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewUpdateManyWithWhereWithoutSongInput], {
    nullable: true
  })
  updateMany?: SongReviewUpdateManyWithWhereWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SongReviewScalarWhereInput[] | undefined;
}
