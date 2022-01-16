import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateManyUserInputEnvelope } from "../inputs/ReviewCreateManyUserInputEnvelope";
import { ReviewCreateOrConnectWithoutUserInput } from "../inputs/ReviewCreateOrConnectWithoutUserInput";
import { ReviewCreateWithoutUserInput } from "../inputs/ReviewCreateWithoutUserInput";
import { ReviewScalarWhereInput } from "../inputs/ReviewScalarWhereInput";
import { ReviewUpdateManyWithWhereWithoutUserInput } from "../inputs/ReviewUpdateManyWithWhereWithoutUserInput";
import { ReviewUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ReviewUpdateWithWhereUniqueWithoutUserInput";
import { ReviewUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ReviewUpsertWithWhereUniqueWithoutUserInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReviewUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ReviewCreateWithoutUserInput], {
    nullable: true
  })
  create?: ReviewCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ReviewCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ReviewCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ReviewCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReviewWhereUniqueInput], {
    nullable: true
  })
  connect?: ReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewWhereUniqueInput], {
    nullable: true
  })
  set?: ReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewWhereUniqueInput], {
    nullable: true
  })
  delete?: ReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: ReviewUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: ReviewUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ReviewScalarWhereInput[] | undefined;
}
