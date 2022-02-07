import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateNestedOneWithoutBooksInput } from "../inputs/PersonCreateNestedOneWithoutBooksInput";

@TypeGraphQL.InputType("AuthorInBookCreateWithoutBookInput", {
  isAbstract: true
})
export class AuthorInBookCreateWithoutBookInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  stagename!: string;

  @TypeGraphQL.Field(_type => PersonCreateNestedOneWithoutBooksInput, {
    nullable: false
  })
  person!: PersonCreateNestedOneWithoutBooksInput;
}
