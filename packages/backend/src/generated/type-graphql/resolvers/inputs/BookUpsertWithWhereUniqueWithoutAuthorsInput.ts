import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateWithoutAuthorsInput } from "../inputs/BookCreateWithoutAuthorsInput";
import { BookUpdateWithoutAuthorsInput } from "../inputs/BookUpdateWithoutAuthorsInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookUpsertWithWhereUniqueWithoutAuthorsInput {
  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: false
  })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookUpdateWithoutAuthorsInput, {
    nullable: false
  })
  update!: BookUpdateWithoutAuthorsInput;

  @TypeGraphQL.Field(_type => BookCreateWithoutAuthorsInput, {
    nullable: false
  })
  create!: BookCreateWithoutAuthorsInput;
}
