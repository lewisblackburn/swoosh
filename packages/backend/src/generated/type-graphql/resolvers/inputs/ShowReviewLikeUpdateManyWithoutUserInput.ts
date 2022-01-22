import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewLikeCreateManyUserInputEnvelope } from "../inputs/ShowReviewLikeCreateManyUserInputEnvelope";
import { ShowReviewLikeCreateOrConnectWithoutUserInput } from "../inputs/ShowReviewLikeCreateOrConnectWithoutUserInput";
import { ShowReviewLikeCreateWithoutUserInput } from "../inputs/ShowReviewLikeCreateWithoutUserInput";
import { ShowReviewLikeScalarWhereInput } from "../inputs/ShowReviewLikeScalarWhereInput";
import { ShowReviewLikeUpdateManyWithWhereWithoutUserInput } from "../inputs/ShowReviewLikeUpdateManyWithWhereWithoutUserInput";
import { ShowReviewLikeUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ShowReviewLikeUpdateWithWhereUniqueWithoutUserInput";
import { ShowReviewLikeUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ShowReviewLikeUpsertWithWhereUniqueWithoutUserInput";
import { ShowReviewLikeWhereUniqueInput } from "../inputs/ShowReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("ShowReviewLikeUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class ShowReviewLikeUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ShowReviewLikeCreateWithoutUserInput], {
    nullable: true
  })
  create?: ShowReviewLikeCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewLikeCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ShowReviewLikeCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewLikeUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: ShowReviewLikeUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ShowReviewLikeCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ShowReviewLikeCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewLikeWhereUniqueInput], {
    nullable: true
  })
  set?: ShowReviewLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewLikeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ShowReviewLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewLikeWhereUniqueInput], {
    nullable: true
  })
  delete?: ShowReviewLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewLikeWhereUniqueInput], {
    nullable: true
  })
  connect?: ShowReviewLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewLikeUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: ShowReviewLikeUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewLikeUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: ShowReviewLikeUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewLikeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ShowReviewLikeScalarWhereInput[] | undefined;
}
