import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInShowCreateManyPersonInputEnvelope } from "../inputs/ActorInShowCreateManyPersonInputEnvelope";
import { ActorInShowCreateOrConnectWithoutPersonInput } from "../inputs/ActorInShowCreateOrConnectWithoutPersonInput";
import { ActorInShowCreateWithoutPersonInput } from "../inputs/ActorInShowCreateWithoutPersonInput";
import { ActorInShowWhereUniqueInput } from "../inputs/ActorInShowWhereUniqueInput";

@TypeGraphQL.InputType("ActorInShowCreateNestedManyWithoutPersonInput", {
  isAbstract: true
})
export class ActorInShowCreateNestedManyWithoutPersonInput {
  @TypeGraphQL.Field(_type => [ActorInShowCreateWithoutPersonInput], {
    nullable: true
  })
  create?: ActorInShowCreateWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInShowCreateOrConnectWithoutPersonInput], {
    nullable: true
  })
  connectOrCreate?: ActorInShowCreateOrConnectWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => ActorInShowCreateManyPersonInputEnvelope, {
    nullable: true
  })
  createMany?: ActorInShowCreateManyPersonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ActorInShowWhereUniqueInput], {
    nullable: true
  })
  connect?: ActorInShowWhereUniqueInput[] | undefined;
}
