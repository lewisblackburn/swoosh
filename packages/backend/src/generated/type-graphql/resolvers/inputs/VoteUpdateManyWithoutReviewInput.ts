import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VoteCreateManyReviewInputEnvelope } from "../inputs/VoteCreateManyReviewInputEnvelope";
import { VoteCreateOrConnectWithoutReviewInput } from "../inputs/VoteCreateOrConnectWithoutReviewInput";
import { VoteCreateWithoutReviewInput } from "../inputs/VoteCreateWithoutReviewInput";
import { VoteScalarWhereInput } from "../inputs/VoteScalarWhereInput";
import { VoteUpdateManyWithWhereWithoutReviewInput } from "../inputs/VoteUpdateManyWithWhereWithoutReviewInput";
import { VoteUpdateWithWhereUniqueWithoutReviewInput } from "../inputs/VoteUpdateWithWhereUniqueWithoutReviewInput";
import { VoteUpsertWithWhereUniqueWithoutReviewInput } from "../inputs/VoteUpsertWithWhereUniqueWithoutReviewInput";
import { VoteWhereUniqueInput } from "../inputs/VoteWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class VoteUpdateManyWithoutReviewInput {
  @TypeGraphQL.Field(_type => [VoteCreateWithoutReviewInput], {
    nullable: true
  })
  create?: VoteCreateWithoutReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [VoteCreateOrConnectWithoutReviewInput], {
    nullable: true
  })
  connectOrCreate?: VoteCreateOrConnectWithoutReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [VoteUpsertWithWhereUniqueWithoutReviewInput], {
    nullable: true
  })
  upsert?: VoteUpsertWithWhereUniqueWithoutReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => VoteCreateManyReviewInputEnvelope, {
    nullable: true
  })
  createMany?: VoteCreateManyReviewInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VoteWhereUniqueInput], {
    nullable: true
  })
  connect?: VoteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VoteWhereUniqueInput], {
    nullable: true
  })
  set?: VoteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VoteWhereUniqueInput], {
    nullable: true
  })
  disconnect?: VoteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VoteWhereUniqueInput], {
    nullable: true
  })
  delete?: VoteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VoteUpdateWithWhereUniqueWithoutReviewInput], {
    nullable: true
  })
  update?: VoteUpdateWithWhereUniqueWithoutReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [VoteUpdateManyWithWhereWithoutReviewInput], {
    nullable: true
  })
  updateMany?: VoteUpdateManyWithWhereWithoutReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [VoteScalarWhereInput], {
    nullable: true
  })
  deleteMany?: VoteScalarWhereInput[] | undefined;
}
