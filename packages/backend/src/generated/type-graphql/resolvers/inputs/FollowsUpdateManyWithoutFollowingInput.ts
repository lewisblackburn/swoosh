import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowsCreateManyFollowingInputEnvelope } from "../inputs/FollowsCreateManyFollowingInputEnvelope";
import { FollowsCreateOrConnectWithoutFollowingInput } from "../inputs/FollowsCreateOrConnectWithoutFollowingInput";
import { FollowsCreateWithoutFollowingInput } from "../inputs/FollowsCreateWithoutFollowingInput";
import { FollowsScalarWhereInput } from "../inputs/FollowsScalarWhereInput";
import { FollowsUpdateManyWithWhereWithoutFollowingInput } from "../inputs/FollowsUpdateManyWithWhereWithoutFollowingInput";
import { FollowsUpdateWithWhereUniqueWithoutFollowingInput } from "../inputs/FollowsUpdateWithWhereUniqueWithoutFollowingInput";
import { FollowsUpsertWithWhereUniqueWithoutFollowingInput } from "../inputs/FollowsUpsertWithWhereUniqueWithoutFollowingInput";
import { FollowsWhereUniqueInput } from "../inputs/FollowsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowsUpdateManyWithoutFollowingInput {
  @TypeGraphQL.Field(_type => [FollowsCreateWithoutFollowingInput], {
    nullable: true
  })
  create?: FollowsCreateWithoutFollowingInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowsCreateOrConnectWithoutFollowingInput], {
    nullable: true
  })
  connectOrCreate?: FollowsCreateOrConnectWithoutFollowingInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowsUpsertWithWhereUniqueWithoutFollowingInput], {
    nullable: true
  })
  upsert?: FollowsUpsertWithWhereUniqueWithoutFollowingInput[] | undefined;

  @TypeGraphQL.Field(_type => FollowsCreateManyFollowingInputEnvelope, {
    nullable: true
  })
  createMany?: FollowsCreateManyFollowingInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FollowsWhereUniqueInput], {
    nullable: true
  })
  connect?: FollowsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowsWhereUniqueInput], {
    nullable: true
  })
  set?: FollowsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FollowsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowsWhereUniqueInput], {
    nullable: true
  })
  delete?: FollowsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowsUpdateWithWhereUniqueWithoutFollowingInput], {
    nullable: true
  })
  update?: FollowsUpdateWithWhereUniqueWithoutFollowingInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowsUpdateManyWithWhereWithoutFollowingInput], {
    nullable: true
  })
  updateMany?: FollowsUpdateManyWithWhereWithoutFollowingInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FollowsScalarWhereInput[] | undefined;
}
