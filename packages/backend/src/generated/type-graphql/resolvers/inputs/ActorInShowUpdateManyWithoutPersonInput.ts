import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInShowCreateManyPersonInputEnvelope } from "../inputs/ActorInShowCreateManyPersonInputEnvelope";
import { ActorInShowCreateOrConnectWithoutPersonInput } from "../inputs/ActorInShowCreateOrConnectWithoutPersonInput";
import { ActorInShowCreateWithoutPersonInput } from "../inputs/ActorInShowCreateWithoutPersonInput";
import { ActorInShowScalarWhereInput } from "../inputs/ActorInShowScalarWhereInput";
import { ActorInShowUpdateManyWithWhereWithoutPersonInput } from "../inputs/ActorInShowUpdateManyWithWhereWithoutPersonInput";
import { ActorInShowUpdateWithWhereUniqueWithoutPersonInput } from "../inputs/ActorInShowUpdateWithWhereUniqueWithoutPersonInput";
import { ActorInShowUpsertWithWhereUniqueWithoutPersonInput } from "../inputs/ActorInShowUpsertWithWhereUniqueWithoutPersonInput";
import { ActorInShowWhereUniqueInput } from "../inputs/ActorInShowWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ActorInShowUpdateManyWithoutPersonInput {
  @TypeGraphQL.Field(_type => [ActorInShowCreateWithoutPersonInput], {
    nullable: true
  })
  create?: ActorInShowCreateWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInShowCreateOrConnectWithoutPersonInput], {
    nullable: true
  })
  connectOrCreate?: ActorInShowCreateOrConnectWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInShowUpsertWithWhereUniqueWithoutPersonInput], {
    nullable: true
  })
  upsert?: ActorInShowUpsertWithWhereUniqueWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => ActorInShowCreateManyPersonInputEnvelope, {
    nullable: true
  })
  createMany?: ActorInShowCreateManyPersonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ActorInShowWhereUniqueInput], {
    nullable: true
  })
  connect?: ActorInShowWhereUniqueInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [ActorInShowUpdateWithWhereUniqueWithoutPersonInput], {
    nullable: true
  })
  update?: ActorInShowUpdateWithWhereUniqueWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInShowUpdateManyWithWhereWithoutPersonInput], {
    nullable: true
  })
  updateMany?: ActorInShowUpdateManyWithWhereWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInShowScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ActorInShowScalarWhereInput[] | undefined;
}
