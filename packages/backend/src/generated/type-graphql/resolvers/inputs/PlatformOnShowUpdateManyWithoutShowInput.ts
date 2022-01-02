import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformOnShowCreateManyShowInputEnvelope } from "../inputs/PlatformOnShowCreateManyShowInputEnvelope";
import { PlatformOnShowCreateOrConnectWithoutShowInput } from "../inputs/PlatformOnShowCreateOrConnectWithoutShowInput";
import { PlatformOnShowCreateWithoutShowInput } from "../inputs/PlatformOnShowCreateWithoutShowInput";
import { PlatformOnShowScalarWhereInput } from "../inputs/PlatformOnShowScalarWhereInput";
import { PlatformOnShowUpdateManyWithWhereWithoutShowInput } from "../inputs/PlatformOnShowUpdateManyWithWhereWithoutShowInput";
import { PlatformOnShowUpdateWithWhereUniqueWithoutShowInput } from "../inputs/PlatformOnShowUpdateWithWhereUniqueWithoutShowInput";
import { PlatformOnShowUpsertWithWhereUniqueWithoutShowInput } from "../inputs/PlatformOnShowUpsertWithWhereUniqueWithoutShowInput";
import { PlatformOnShowWhereUniqueInput } from "../inputs/PlatformOnShowWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnShowUpdateManyWithoutShowInput {
  @TypeGraphQL.Field(_type => [PlatformOnShowCreateWithoutShowInput], {
    nullable: true
  })
  create?: PlatformOnShowCreateWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnShowCreateOrConnectWithoutShowInput], {
    nullable: true
  })
  connectOrCreate?: PlatformOnShowCreateOrConnectWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnShowUpsertWithWhereUniqueWithoutShowInput], {
    nullable: true
  })
  upsert?: PlatformOnShowUpsertWithWhereUniqueWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => PlatformOnShowCreateManyShowInputEnvelope, {
    nullable: true
  })
  createMany?: PlatformOnShowCreateManyShowInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnShowWhereUniqueInput], {
    nullable: true
  })
  connect?: PlatformOnShowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnShowWhereUniqueInput], {
    nullable: true
  })
  set?: PlatformOnShowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnShowWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PlatformOnShowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnShowWhereUniqueInput], {
    nullable: true
  })
  delete?: PlatformOnShowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnShowUpdateWithWhereUniqueWithoutShowInput], {
    nullable: true
  })
  update?: PlatformOnShowUpdateWithWhereUniqueWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnShowUpdateManyWithWhereWithoutShowInput], {
    nullable: true
  })
  updateMany?: PlatformOnShowUpdateManyWithWhereWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnShowScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PlatformOnShowScalarWhereInput[] | undefined;
}
