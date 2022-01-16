import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateManyShowInputEnvelope } from "../inputs/ReviewCreateManyShowInputEnvelope";
import { ReviewCreateOrConnectWithoutShowInput } from "../inputs/ReviewCreateOrConnectWithoutShowInput";
import { ReviewCreateWithoutShowInput } from "../inputs/ReviewCreateWithoutShowInput";
import { ReviewScalarWhereInput } from "../inputs/ReviewScalarWhereInput";
import { ReviewUpdateManyWithWhereWithoutShowInput } from "../inputs/ReviewUpdateManyWithWhereWithoutShowInput";
import { ReviewUpdateWithWhereUniqueWithoutShowInput } from "../inputs/ReviewUpdateWithWhereUniqueWithoutShowInput";
import { ReviewUpsertWithWhereUniqueWithoutShowInput } from "../inputs/ReviewUpsertWithWhereUniqueWithoutShowInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReviewUpdateManyWithoutShowInput {
  @TypeGraphQL.Field(_type => [ReviewCreateWithoutShowInput], {
    nullable: true
  })
  create?: ReviewCreateWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewCreateOrConnectWithoutShowInput], {
    nullable: true
  })
  connectOrCreate?: ReviewCreateOrConnectWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewUpsertWithWhereUniqueWithoutShowInput], {
    nullable: true
  })
  upsert?: ReviewUpsertWithWhereUniqueWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => ReviewCreateManyShowInputEnvelope, {
    nullable: true
  })
  createMany?: ReviewCreateManyShowInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ReviewUpdateWithWhereUniqueWithoutShowInput], {
    nullable: true
  })
  update?: ReviewUpdateWithWhereUniqueWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewUpdateManyWithWhereWithoutShowInput], {
    nullable: true
  })
  updateMany?: ReviewUpdateManyWithWhereWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ReviewScalarWhereInput[] | undefined;
}
