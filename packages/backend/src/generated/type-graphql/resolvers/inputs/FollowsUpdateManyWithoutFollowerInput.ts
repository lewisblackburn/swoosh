import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowsCreateManyFollowerInputEnvelope } from "../inputs/FollowsCreateManyFollowerInputEnvelope";
import { FollowsCreateOrConnectWithoutFollowerInput } from "../inputs/FollowsCreateOrConnectWithoutFollowerInput";
import { FollowsCreateWithoutFollowerInput } from "../inputs/FollowsCreateWithoutFollowerInput";
import { FollowsScalarWhereInput } from "../inputs/FollowsScalarWhereInput";
import { FollowsUpdateManyWithWhereWithoutFollowerInput } from "../inputs/FollowsUpdateManyWithWhereWithoutFollowerInput";
import { FollowsUpdateWithWhereUniqueWithoutFollowerInput } from "../inputs/FollowsUpdateWithWhereUniqueWithoutFollowerInput";
import { FollowsUpsertWithWhereUniqueWithoutFollowerInput } from "../inputs/FollowsUpsertWithWhereUniqueWithoutFollowerInput";
import { FollowsWhereUniqueInput } from "../inputs/FollowsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowsUpdateManyWithoutFollowerInput {
  @TypeGraphQL.Field(_type => [FollowsCreateWithoutFollowerInput], {
    nullable: true
  })
  create?: FollowsCreateWithoutFollowerInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowsCreateOrConnectWithoutFollowerInput], {
    nullable: true
  })
  connectOrCreate?: FollowsCreateOrConnectWithoutFollowerInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowsUpsertWithWhereUniqueWithoutFollowerInput], {
    nullable: true
  })
  upsert?: FollowsUpsertWithWhereUniqueWithoutFollowerInput[] | undefined;

  @TypeGraphQL.Field(_type => FollowsCreateManyFollowerInputEnvelope, {
    nullable: true
  })
  createMany?: FollowsCreateManyFollowerInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [FollowsUpdateWithWhereUniqueWithoutFollowerInput], {
    nullable: true
  })
  update?: FollowsUpdateWithWhereUniqueWithoutFollowerInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowsUpdateManyWithWhereWithoutFollowerInput], {
    nullable: true
  })
  updateMany?: FollowsUpdateManyWithWhereWithoutFollowerInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FollowsScalarWhereInput[] | undefined;
}
