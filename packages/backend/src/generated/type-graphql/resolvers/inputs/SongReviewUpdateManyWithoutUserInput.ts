import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewCreateManyUserInputEnvelope } from "../inputs/SongReviewCreateManyUserInputEnvelope";
import { SongReviewCreateOrConnectWithoutUserInput } from "../inputs/SongReviewCreateOrConnectWithoutUserInput";
import { SongReviewCreateWithoutUserInput } from "../inputs/SongReviewCreateWithoutUserInput";
import { SongReviewScalarWhereInput } from "../inputs/SongReviewScalarWhereInput";
import { SongReviewUpdateManyWithWhereWithoutUserInput } from "../inputs/SongReviewUpdateManyWithWhereWithoutUserInput";
import { SongReviewUpdateWithWhereUniqueWithoutUserInput } from "../inputs/SongReviewUpdateWithWhereUniqueWithoutUserInput";
import { SongReviewUpsertWithWhereUniqueWithoutUserInput } from "../inputs/SongReviewUpsertWithWhereUniqueWithoutUserInput";
import { SongReviewWhereUniqueInput } from "../inputs/SongReviewWhereUniqueInput";

@TypeGraphQL.InputType("SongReviewUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class SongReviewUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [SongReviewCreateWithoutUserInput], {
    nullable: true
  })
  create?: SongReviewCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: SongReviewCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: SongReviewUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => SongReviewCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: SongReviewCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [SongReviewUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: SongReviewUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: SongReviewUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SongReviewScalarWhereInput[] | undefined;
}
