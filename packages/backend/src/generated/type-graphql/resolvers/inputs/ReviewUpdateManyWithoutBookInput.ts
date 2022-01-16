import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateManyBookInputEnvelope } from "../inputs/ReviewCreateManyBookInputEnvelope";
import { ReviewCreateOrConnectWithoutBookInput } from "../inputs/ReviewCreateOrConnectWithoutBookInput";
import { ReviewCreateWithoutBookInput } from "../inputs/ReviewCreateWithoutBookInput";
import { ReviewScalarWhereInput } from "../inputs/ReviewScalarWhereInput";
import { ReviewUpdateManyWithWhereWithoutBookInput } from "../inputs/ReviewUpdateManyWithWhereWithoutBookInput";
import { ReviewUpdateWithWhereUniqueWithoutBookInput } from "../inputs/ReviewUpdateWithWhereUniqueWithoutBookInput";
import { ReviewUpsertWithWhereUniqueWithoutBookInput } from "../inputs/ReviewUpsertWithWhereUniqueWithoutBookInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReviewUpdateManyWithoutBookInput {
  @TypeGraphQL.Field(_type => [ReviewCreateWithoutBookInput], {
    nullable: true
  })
  create?: ReviewCreateWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewCreateOrConnectWithoutBookInput], {
    nullable: true
  })
  connectOrCreate?: ReviewCreateOrConnectWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewUpsertWithWhereUniqueWithoutBookInput], {
    nullable: true
  })
  upsert?: ReviewUpsertWithWhereUniqueWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => ReviewCreateManyBookInputEnvelope, {
    nullable: true
  })
  createMany?: ReviewCreateManyBookInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ReviewUpdateWithWhereUniqueWithoutBookInput], {
    nullable: true
  })
  update?: ReviewUpdateWithWhereUniqueWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewUpdateManyWithWhereWithoutBookInput], {
    nullable: true
  })
  updateMany?: ReviewUpdateManyWithWhereWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ReviewScalarWhereInput[] | undefined;
}
