import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInShowCreateWithoutPersonInput } from "../inputs/ActorInShowCreateWithoutPersonInput";
import { ActorInShowWhereUniqueInput } from "../inputs/ActorInShowWhereUniqueInput";

@TypeGraphQL.InputType("ActorInShowCreateOrConnectWithoutPersonInput", {
  isAbstract: true
})
export class ActorInShowCreateOrConnectWithoutPersonInput {
  @TypeGraphQL.Field(_type => ActorInShowWhereUniqueInput, {
    nullable: false
  })
  where!: ActorInShowWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActorInShowCreateWithoutPersonInput, {
    nullable: false
  })
  create!: ActorInShowCreateWithoutPersonInput;
}
