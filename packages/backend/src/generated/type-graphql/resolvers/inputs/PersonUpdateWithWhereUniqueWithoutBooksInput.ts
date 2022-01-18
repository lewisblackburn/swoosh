import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonUpdateWithoutBooksInput } from "../inputs/PersonUpdateWithoutBooksInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType("PersonUpdateWithWhereUniqueWithoutBooksInput", {
  isAbstract: true
})
export class PersonUpdateWithWhereUniqueWithoutBooksInput {
  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: false
  })
  where!: PersonWhereUniqueInput;

  @TypeGraphQL.Field(_type => PersonUpdateWithoutBooksInput, {
    nullable: false
  })
  data!: PersonUpdateWithoutBooksInput;
}
