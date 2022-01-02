import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformOnShowCreateManyPlatformInputEnvelope } from "../inputs/PlatformOnShowCreateManyPlatformInputEnvelope";
import { PlatformOnShowCreateOrConnectWithoutPlatformInput } from "../inputs/PlatformOnShowCreateOrConnectWithoutPlatformInput";
import { PlatformOnShowCreateWithoutPlatformInput } from "../inputs/PlatformOnShowCreateWithoutPlatformInput";
import { PlatformOnShowScalarWhereInput } from "../inputs/PlatformOnShowScalarWhereInput";
import { PlatformOnShowUpdateManyWithWhereWithoutPlatformInput } from "../inputs/PlatformOnShowUpdateManyWithWhereWithoutPlatformInput";
import { PlatformOnShowUpdateWithWhereUniqueWithoutPlatformInput } from "../inputs/PlatformOnShowUpdateWithWhereUniqueWithoutPlatformInput";
import { PlatformOnShowUpsertWithWhereUniqueWithoutPlatformInput } from "../inputs/PlatformOnShowUpsertWithWhereUniqueWithoutPlatformInput";
import { PlatformOnShowWhereUniqueInput } from "../inputs/PlatformOnShowWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnShowUpdateManyWithoutPlatformInput {
  @TypeGraphQL.Field(_type => [PlatformOnShowCreateWithoutPlatformInput], {
    nullable: true
  })
  create?: PlatformOnShowCreateWithoutPlatformInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnShowCreateOrConnectWithoutPlatformInput], {
    nullable: true
  })
  connectOrCreate?: PlatformOnShowCreateOrConnectWithoutPlatformInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnShowUpsertWithWhereUniqueWithoutPlatformInput], {
    nullable: true
  })
  upsert?: PlatformOnShowUpsertWithWhereUniqueWithoutPlatformInput[] | undefined;

  @TypeGraphQL.Field(_type => PlatformOnShowCreateManyPlatformInputEnvelope, {
    nullable: true
  })
  createMany?: PlatformOnShowCreateManyPlatformInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PlatformOnShowUpdateWithWhereUniqueWithoutPlatformInput], {
    nullable: true
  })
  update?: PlatformOnShowUpdateWithWhereUniqueWithoutPlatformInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnShowUpdateManyWithWhereWithoutPlatformInput], {
    nullable: true
  })
  updateMany?: PlatformOnShowUpdateManyWithWhereWithoutPlatformInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnShowScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PlatformOnShowScalarWhereInput[] | undefined;
}
