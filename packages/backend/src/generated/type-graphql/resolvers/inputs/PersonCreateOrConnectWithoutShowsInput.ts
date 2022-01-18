import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateWithoutShowsInput } from "../inputs/PersonCreateWithoutShowsInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType("PersonCreateOrConnectWithoutShowsInput", {
  isAbstract: true
})
export class PersonCreateOrConnectWithoutShowsInput {
  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: false
  })
  where!: PersonWhereUniqueInput;

  @TypeGraphQL.Field(_type => PersonCreateWithoutShowsInput, {
    nullable: false
  })
  create!: PersonCreateWithoutShowsInput;
}
