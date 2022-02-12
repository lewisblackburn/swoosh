import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateNestedOneWithoutAuthorsInput } from "../inputs/BookCreateNestedOneWithoutAuthorsInput";
import { PersonCreateNestedOneWithoutBooksInput } from "../inputs/PersonCreateNestedOneWithoutBooksInput";

@TypeGraphQL.InputType("AuthorInBookCreateInput", {
  isAbstract: true
})
export class AuthorInBookCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => BookCreateNestedOneWithoutAuthorsInput, {
    nullable: false
  })
  book!: BookCreateNestedOneWithoutAuthorsInput;

  @TypeGraphQL.Field(_type => PersonCreateNestedOneWithoutBooksInput, {
    nullable: false
  })
  person!: PersonCreateNestedOneWithoutBooksInput;
}
