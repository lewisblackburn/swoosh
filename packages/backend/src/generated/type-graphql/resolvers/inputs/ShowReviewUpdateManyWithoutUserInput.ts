import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewCreateManyUserInputEnvelope } from "../inputs/ShowReviewCreateManyUserInputEnvelope";
import { ShowReviewCreateOrConnectWithoutUserInput } from "../inputs/ShowReviewCreateOrConnectWithoutUserInput";
import { ShowReviewCreateWithoutUserInput } from "../inputs/ShowReviewCreateWithoutUserInput";
import { ShowReviewScalarWhereInput } from "../inputs/ShowReviewScalarWhereInput";
import { ShowReviewUpdateManyWithWhereWithoutUserInput } from "../inputs/ShowReviewUpdateManyWithWhereWithoutUserInput";
import { ShowReviewUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ShowReviewUpdateWithWhereUniqueWithoutUserInput";
import { ShowReviewUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ShowReviewUpsertWithWhereUniqueWithoutUserInput";
import { ShowReviewWhereUniqueInput } from "../inputs/ShowReviewWhereUniqueInput";

@TypeGraphQL.InputType("ShowReviewUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class ShowReviewUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ShowReviewCreateWithoutUserInput], {
    nullable: true
  })
  create?: ShowReviewCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ShowReviewCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: ShowReviewUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ShowReviewCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ShowReviewCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewWhereUniqueInput], {
    nullable: true
  })
  set?: ShowReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ShowReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewWhereUniqueInput], {
    nullable: true
  })
  delete?: ShowReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewWhereUniqueInput], {
    nullable: true
  })
  connect?: ShowReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: ShowReviewUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: ShowReviewUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ShowReviewScalarWhereInput[] | undefined;
}
