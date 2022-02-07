import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateWithoutAuthorsInput } from "../inputs/BookCreateWithoutAuthorsInput";
import { BookUpdateWithoutAuthorsInput } from "../inputs/BookUpdateWithoutAuthorsInput";

@TypeGraphQL.InputType("BookUpsertWithoutAuthorsInput", {
  isAbstract: true
})
export class BookUpsertWithoutAuthorsInput {
  @TypeGraphQL.Field(_type => BookUpdateWithoutAuthorsInput, {
    nullable: false
  })
  update!: BookUpdateWithoutAuthorsInput;

  @TypeGraphQL.Field(_type => BookCreateWithoutAuthorsInput, {
    nullable: false
  })
  create!: BookCreateWithoutAuthorsInput;
}
