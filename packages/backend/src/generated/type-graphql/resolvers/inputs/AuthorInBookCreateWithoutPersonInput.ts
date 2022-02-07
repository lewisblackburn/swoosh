import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateNestedOneWithoutAuthorsInput } from "../inputs/BookCreateNestedOneWithoutAuthorsInput";

@TypeGraphQL.InputType("AuthorInBookCreateWithoutPersonInput", {
  isAbstract: true
})
export class AuthorInBookCreateWithoutPersonInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  stagename!: string;

  @TypeGraphQL.Field(_type => BookCreateNestedOneWithoutAuthorsInput, {
    nullable: false
  })
  book!: BookCreateNestedOneWithoutAuthorsInput;
}
