import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformOnShowCreateManyPlatformInputEnvelope } from "../inputs/PlatformOnShowCreateManyPlatformInputEnvelope";
import { PlatformOnShowCreateOrConnectWithoutPlatformInput } from "../inputs/PlatformOnShowCreateOrConnectWithoutPlatformInput";
import { PlatformOnShowCreateWithoutPlatformInput } from "../inputs/PlatformOnShowCreateWithoutPlatformInput";
import { PlatformOnShowWhereUniqueInput } from "../inputs/PlatformOnShowWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnShowCreateNestedManyWithoutPlatformInput {
  @TypeGraphQL.Field(_type => [PlatformOnShowCreateWithoutPlatformInput], {
    nullable: true
  })
  create?: PlatformOnShowCreateWithoutPlatformInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnShowCreateOrConnectWithoutPlatformInput], {
    nullable: true
  })
  connectOrCreate?: PlatformOnShowCreateOrConnectWithoutPlatformInput[] | undefined;

  @TypeGraphQL.Field(_type => PlatformOnShowCreateManyPlatformInputEnvelope, {
    nullable: true
  })
  createMany?: PlatformOnShowCreateManyPlatformInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnShowWhereUniqueInput], {
    nullable: true
  })
  connect?: PlatformOnShowWhereUniqueInput[] | undefined;
}
