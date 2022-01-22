import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewLikeCreateManyShowReviewInputEnvelope } from "../inputs/ShowReviewLikeCreateManyShowReviewInputEnvelope";
import { ShowReviewLikeCreateOrConnectWithoutShowReviewInput } from "../inputs/ShowReviewLikeCreateOrConnectWithoutShowReviewInput";
import { ShowReviewLikeCreateWithoutShowReviewInput } from "../inputs/ShowReviewLikeCreateWithoutShowReviewInput";
import { ShowReviewLikeScalarWhereInput } from "../inputs/ShowReviewLikeScalarWhereInput";
import { ShowReviewLikeUpdateManyWithWhereWithoutShowReviewInput } from "../inputs/ShowReviewLikeUpdateManyWithWhereWithoutShowReviewInput";
import { ShowReviewLikeUpdateWithWhereUniqueWithoutShowReviewInput } from "../inputs/ShowReviewLikeUpdateWithWhereUniqueWithoutShowReviewInput";
import { ShowReviewLikeUpsertWithWhereUniqueWithoutShowReviewInput } from "../inputs/ShowReviewLikeUpsertWithWhereUniqueWithoutShowReviewInput";
import { ShowReviewLikeWhereUniqueInput } from "../inputs/ShowReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("ShowReviewLikeUpdateManyWithoutShowReviewInput", {
  isAbstract: true
})
export class ShowReviewLikeUpdateManyWithoutShowReviewInput {
  @TypeGraphQL.Field(_type => [ShowReviewLikeCreateWithoutShowReviewInput], {
    nullable: true
  })
  create?: ShowReviewLikeCreateWithoutShowReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewLikeCreateOrConnectWithoutShowReviewInput], {
    nullable: true
  })
  connectOrCreate?: ShowReviewLikeCreateOrConnectWithoutShowReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewLikeUpsertWithWhereUniqueWithoutShowReviewInput], {
    nullable: true
  })
  upsert?: ShowReviewLikeUpsertWithWhereUniqueWithoutShowReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => ShowReviewLikeCreateManyShowReviewInputEnvelope, {
    nullable: true
  })
  createMany?: ShowReviewLikeCreateManyShowReviewInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ShowReviewLikeUpdateWithWhereUniqueWithoutShowReviewInput], {
    nullable: true
  })
  update?: ShowReviewLikeUpdateWithWhereUniqueWithoutShowReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewLikeUpdateManyWithWhereWithoutShowReviewInput], {
    nullable: true
  })
  updateMany?: ShowReviewLikeUpdateManyWithWhereWithoutShowReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewLikeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ShowReviewLikeScalarWhereInput[] | undefined;
}
