import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInShowUpdateWithoutShowInput } from "../inputs/ActorInShowUpdateWithoutShowInput";
import { ActorInShowWhereUniqueInput } from "../inputs/ActorInShowWhereUniqueInput";

@TypeGraphQL.InputType("ActorInShowUpdateWithWhereUniqueWithoutShowInput", {
  isAbstract: true
})
export class ActorInShowUpdateWithWhereUniqueWithoutShowInput {
  @TypeGraphQL.Field(_type => ActorInShowWhereUniqueInput, {
    nullable: false
  })
  where!: ActorInShowWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActorInShowUpdateWithoutShowInput, {
    nullable: false
  })
  data!: ActorInShowUpdateWithoutShowInput;
}
