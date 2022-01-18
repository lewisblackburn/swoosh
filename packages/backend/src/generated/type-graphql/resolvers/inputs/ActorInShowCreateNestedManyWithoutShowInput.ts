import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInShowCreateManyShowInputEnvelope } from "../inputs/ActorInShowCreateManyShowInputEnvelope";
import { ActorInShowCreateOrConnectWithoutShowInput } from "../inputs/ActorInShowCreateOrConnectWithoutShowInput";
import { ActorInShowCreateWithoutShowInput } from "../inputs/ActorInShowCreateWithoutShowInput";
import { ActorInShowWhereUniqueInput } from "../inputs/ActorInShowWhereUniqueInput";

@TypeGraphQL.InputType("ActorInShowCreateNestedManyWithoutShowInput", {
  isAbstract: true
})
export class ActorInShowCreateNestedManyWithoutShowInput {
  @TypeGraphQL.Field(_type => [ActorInShowCreateWithoutShowInput], {
    nullable: true
  })
  create?: ActorInShowCreateWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInShowCreateOrConnectWithoutShowInput], {
    nullable: true
  })
  connectOrCreate?: ActorInShowCreateOrConnectWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => ActorInShowCreateManyShowInputEnvelope, {
    nullable: true
  })
  createMany?: ActorInShowCreateManyShowInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ActorInShowWhereUniqueInput], {
    nullable: true
  })
  connect?: ActorInShowWhereUniqueInput[] | undefined;
}
