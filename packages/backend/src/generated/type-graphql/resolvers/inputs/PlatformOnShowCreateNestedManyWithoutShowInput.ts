import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformOnShowCreateManyShowInputEnvelope } from "../inputs/PlatformOnShowCreateManyShowInputEnvelope";
import { PlatformOnShowCreateOrConnectWithoutShowInput } from "../inputs/PlatformOnShowCreateOrConnectWithoutShowInput";
import { PlatformOnShowCreateWithoutShowInput } from "../inputs/PlatformOnShowCreateWithoutShowInput";
import { PlatformOnShowWhereUniqueInput } from "../inputs/PlatformOnShowWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnShowCreateNestedManyWithoutShowInput {
  @TypeGraphQL.Field(_type => [PlatformOnShowCreateWithoutShowInput], {
    nullable: true
  })
  create?: PlatformOnShowCreateWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnShowCreateOrConnectWithoutShowInput], {
    nullable: true
  })
  connectOrCreate?: PlatformOnShowCreateOrConnectWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => PlatformOnShowCreateManyShowInputEnvelope, {
    nullable: true
  })
  createMany?: PlatformOnShowCreateManyShowInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnShowWhereUniqueInput], {
    nullable: true
  })
  connect?: PlatformOnShowWhereUniqueInput[] | undefined;
}
