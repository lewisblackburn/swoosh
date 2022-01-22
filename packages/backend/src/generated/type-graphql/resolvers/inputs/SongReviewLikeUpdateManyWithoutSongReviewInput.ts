import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewLikeCreateManySongReviewInputEnvelope } from "../inputs/SongReviewLikeCreateManySongReviewInputEnvelope";
import { SongReviewLikeCreateOrConnectWithoutSongReviewInput } from "../inputs/SongReviewLikeCreateOrConnectWithoutSongReviewInput";
import { SongReviewLikeCreateWithoutSongReviewInput } from "../inputs/SongReviewLikeCreateWithoutSongReviewInput";
import { SongReviewLikeScalarWhereInput } from "../inputs/SongReviewLikeScalarWhereInput";
import { SongReviewLikeUpdateManyWithWhereWithoutSongReviewInput } from "../inputs/SongReviewLikeUpdateManyWithWhereWithoutSongReviewInput";
import { SongReviewLikeUpdateWithWhereUniqueWithoutSongReviewInput } from "../inputs/SongReviewLikeUpdateWithWhereUniqueWithoutSongReviewInput";
import { SongReviewLikeUpsertWithWhereUniqueWithoutSongReviewInput } from "../inputs/SongReviewLikeUpsertWithWhereUniqueWithoutSongReviewInput";
import { SongReviewLikeWhereUniqueInput } from "../inputs/SongReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("SongReviewLikeUpdateManyWithoutSongReviewInput", {
  isAbstract: true
})
export class SongReviewLikeUpdateManyWithoutSongReviewInput {
  @TypeGraphQL.Field(_type => [SongReviewLikeCreateWithoutSongReviewInput], {
    nullable: true
  })
  create?: SongReviewLikeCreateWithoutSongReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewLikeCreateOrConnectWithoutSongReviewInput], {
    nullable: true
  })
  connectOrCreate?: SongReviewLikeCreateOrConnectWithoutSongReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewLikeUpsertWithWhereUniqueWithoutSongReviewInput], {
    nullable: true
  })
  upsert?: SongReviewLikeUpsertWithWhereUniqueWithoutSongReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => SongReviewLikeCreateManySongReviewInputEnvelope, {
    nullable: true
  })
  createMany?: SongReviewLikeCreateManySongReviewInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SongReviewLikeWhereUniqueInput], {
    nullable: true
  })
  set?: SongReviewLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewLikeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SongReviewLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewLikeWhereUniqueInput], {
    nullable: true
  })
  delete?: SongReviewLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewLikeWhereUniqueInput], {
    nullable: true
  })
  connect?: SongReviewLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewLikeUpdateWithWhereUniqueWithoutSongReviewInput], {
    nullable: true
  })
  update?: SongReviewLikeUpdateWithWhereUniqueWithoutSongReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewLikeUpdateManyWithWhereWithoutSongReviewInput], {
    nullable: true
  })
  updateMany?: SongReviewLikeUpdateManyWithWhereWithoutSongReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewLikeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SongReviewLikeScalarWhereInput[] | undefined;
}
