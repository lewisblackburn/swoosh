import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInShowCreateWithoutShowInput } from "../inputs/ActorInShowCreateWithoutShowInput";
import { ActorInShowWhereUniqueInput } from "../inputs/ActorInShowWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ActorInShowCreateOrConnectWithoutShowInput {
  @TypeGraphQL.Field(_type => ActorInShowWhereUniqueInput, {
    nullable: false
  })
  where!: ActorInShowWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActorInShowCreateWithoutShowInput, {
    nullable: false
  })
  create!: ActorInShowCreateWithoutShowInput;
}
