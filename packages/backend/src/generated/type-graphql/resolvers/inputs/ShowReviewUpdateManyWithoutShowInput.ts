import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewCreateManyShowInputEnvelope } from "../inputs/ShowReviewCreateManyShowInputEnvelope";
import { ShowReviewCreateOrConnectWithoutShowInput } from "../inputs/ShowReviewCreateOrConnectWithoutShowInput";
import { ShowReviewCreateWithoutShowInput } from "../inputs/ShowReviewCreateWithoutShowInput";
import { ShowReviewScalarWhereInput } from "../inputs/ShowReviewScalarWhereInput";
import { ShowReviewUpdateManyWithWhereWithoutShowInput } from "../inputs/ShowReviewUpdateManyWithWhereWithoutShowInput";
import { ShowReviewUpdateWithWhereUniqueWithoutShowInput } from "../inputs/ShowReviewUpdateWithWhereUniqueWithoutShowInput";
import { ShowReviewUpsertWithWhereUniqueWithoutShowInput } from "../inputs/ShowReviewUpsertWithWhereUniqueWithoutShowInput";
import { ShowReviewWhereUniqueInput } from "../inputs/ShowReviewWhereUniqueInput";

@TypeGraphQL.InputType("ShowReviewUpdateManyWithoutShowInput", {
  isAbstract: true
})
export class ShowReviewUpdateManyWithoutShowInput {
  @TypeGraphQL.Field(_type => [ShowReviewCreateWithoutShowInput], {
    nullable: true
  })
  create?: ShowReviewCreateWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewCreateOrConnectWithoutShowInput], {
    nullable: true
  })
  connectOrCreate?: ShowReviewCreateOrConnectWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewUpsertWithWhereUniqueWithoutShowInput], {
    nullable: true
  })
  upsert?: ShowReviewUpsertWithWhereUniqueWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => ShowReviewCreateManyShowInputEnvelope, {
    nullable: true
  })
  createMany?: ShowReviewCreateManyShowInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ShowReviewUpdateWithWhereUniqueWithoutShowInput], {
    nullable: true
  })
  update?: ShowReviewUpdateWithWhereUniqueWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewUpdateManyWithWhereWithoutShowInput], {
    nullable: true
  })
  updateMany?: ShowReviewUpdateManyWithWhereWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ShowReviewScalarWhereInput[] | undefined;
}
