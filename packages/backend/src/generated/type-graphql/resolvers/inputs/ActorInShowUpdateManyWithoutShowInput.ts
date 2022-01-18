import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInShowCreateManyShowInputEnvelope } from "../inputs/ActorInShowCreateManyShowInputEnvelope";
import { ActorInShowCreateOrConnectWithoutShowInput } from "../inputs/ActorInShowCreateOrConnectWithoutShowInput";
import { ActorInShowCreateWithoutShowInput } from "../inputs/ActorInShowCreateWithoutShowInput";
import { ActorInShowScalarWhereInput } from "../inputs/ActorInShowScalarWhereInput";
import { ActorInShowUpdateManyWithWhereWithoutShowInput } from "../inputs/ActorInShowUpdateManyWithWhereWithoutShowInput";
import { ActorInShowUpdateWithWhereUniqueWithoutShowInput } from "../inputs/ActorInShowUpdateWithWhereUniqueWithoutShowInput";
import { ActorInShowUpsertWithWhereUniqueWithoutShowInput } from "../inputs/ActorInShowUpsertWithWhereUniqueWithoutShowInput";
import { ActorInShowWhereUniqueInput } from "../inputs/ActorInShowWhereUniqueInput";

@TypeGraphQL.InputType("ActorInShowUpdateManyWithoutShowInput", {
  isAbstract: true
})
export class ActorInShowUpdateManyWithoutShowInput {
  @TypeGraphQL.Field(_type => [ActorInShowCreateWithoutShowInput], {
    nullable: true
  })
  create?: ActorInShowCreateWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInShowCreateOrConnectWithoutShowInput], {
    nullable: true
  })
  connectOrCreate?: ActorInShowCreateOrConnectWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInShowUpsertWithWhereUniqueWithoutShowInput], {
    nullable: true
  })
  upsert?: ActorInShowUpsertWithWhereUniqueWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => ActorInShowCreateManyShowInputEnvelope, {
    nullable: true
  })
  createMany?: ActorInShowCreateManyShowInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ActorInShowWhereUniqueInput], {
    nullable: true
  })
  set?: ActorInShowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInShowWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ActorInShowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInShowWhereUniqueInput], {
    nullable: true
  })
  delete?: ActorInShowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInShowWhereUniqueInput], {
    nullable: true
  })
  connect?: ActorInShowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInShowUpdateWithWhereUniqueWithoutShowInput], {
    nullable: true
  })
  update?: ActorInShowUpdateWithWhereUniqueWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInShowUpdateManyWithWhereWithoutShowInput], {
    nullable: true
  })
  updateMany?: ActorInShowUpdateManyWithWhereWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInShowScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ActorInShowScalarWhereInput[] | undefined;
}
