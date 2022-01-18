import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateNestedOneWithoutShowsInput } from "../inputs/PersonCreateNestedOneWithoutShowsInput";

@TypeGraphQL.InputType("ActorInShowCreateWithoutShowInput", {
  isAbstract: true
})
export class ActorInShowCreateWithoutShowInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  role!: string;

  @TypeGraphQL.Field(_type => PersonCreateNestedOneWithoutShowsInput, {
    nullable: false
  })
  person!: PersonCreateNestedOneWithoutShowsInput;
}
