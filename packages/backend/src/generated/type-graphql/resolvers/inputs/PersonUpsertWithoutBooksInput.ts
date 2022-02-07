import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateWithoutBooksInput } from "../inputs/PersonCreateWithoutBooksInput";
import { PersonUpdateWithoutBooksInput } from "../inputs/PersonUpdateWithoutBooksInput";

@TypeGraphQL.InputType("PersonUpsertWithoutBooksInput", {
  isAbstract: true
})
export class PersonUpsertWithoutBooksInput {
  @TypeGraphQL.Field(_type => PersonUpdateWithoutBooksInput, {
    nullable: false
  })
  update!: PersonUpdateWithoutBooksInput;

  @TypeGraphQL.Field(_type => PersonCreateWithoutBooksInput, {
    nullable: false
  })
  create!: PersonCreateWithoutBooksInput;
}
