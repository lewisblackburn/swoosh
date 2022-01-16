import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VoteCreateManyUserInputEnvelope } from "../inputs/VoteCreateManyUserInputEnvelope";
import { VoteCreateOrConnectWithoutUserInput } from "../inputs/VoteCreateOrConnectWithoutUserInput";
import { VoteCreateWithoutUserInput } from "../inputs/VoteCreateWithoutUserInput";
import { VoteScalarWhereInput } from "../inputs/VoteScalarWhereInput";
import { VoteUpdateManyWithWhereWithoutUserInput } from "../inputs/VoteUpdateManyWithWhereWithoutUserInput";
import { VoteUpdateWithWhereUniqueWithoutUserInput } from "../inputs/VoteUpdateWithWhereUniqueWithoutUserInput";
import { VoteUpsertWithWhereUniqueWithoutUserInput } from "../inputs/VoteUpsertWithWhereUniqueWithoutUserInput";
import { VoteWhereUniqueInput } from "../inputs/VoteWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class VoteUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [VoteCreateWithoutUserInput], {
    nullable: true
  })
  create?: VoteCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [VoteCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: VoteCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [VoteUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: VoteUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => VoteCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: VoteCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [VoteUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: VoteUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [VoteUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: VoteUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [VoteScalarWhereInput], {
    nullable: true
  })
  deleteMany?: VoteScalarWhereInput[] | undefined;
}
