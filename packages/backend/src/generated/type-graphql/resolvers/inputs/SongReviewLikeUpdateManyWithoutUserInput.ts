import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewLikeCreateManyUserInputEnvelope } from "../inputs/SongReviewLikeCreateManyUserInputEnvelope";
import { SongReviewLikeCreateOrConnectWithoutUserInput } from "../inputs/SongReviewLikeCreateOrConnectWithoutUserInput";
import { SongReviewLikeCreateWithoutUserInput } from "../inputs/SongReviewLikeCreateWithoutUserInput";
import { SongReviewLikeScalarWhereInput } from "../inputs/SongReviewLikeScalarWhereInput";
import { SongReviewLikeUpdateManyWithWhereWithoutUserInput } from "../inputs/SongReviewLikeUpdateManyWithWhereWithoutUserInput";
import { SongReviewLikeUpdateWithWhereUniqueWithoutUserInput } from "../inputs/SongReviewLikeUpdateWithWhereUniqueWithoutUserInput";
import { SongReviewLikeUpsertWithWhereUniqueWithoutUserInput } from "../inputs/SongReviewLikeUpsertWithWhereUniqueWithoutUserInput";
import { SongReviewLikeWhereUniqueInput } from "../inputs/SongReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("SongReviewLikeUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class SongReviewLikeUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [SongReviewLikeCreateWithoutUserInput], {
    nullable: true
  })
  create?: SongReviewLikeCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewLikeCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: SongReviewLikeCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewLikeUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: SongReviewLikeUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => SongReviewLikeCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: SongReviewLikeCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [SongReviewLikeUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: SongReviewLikeUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewLikeUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: SongReviewLikeUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewLikeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SongReviewLikeScalarWhereInput[] | undefined;
}
