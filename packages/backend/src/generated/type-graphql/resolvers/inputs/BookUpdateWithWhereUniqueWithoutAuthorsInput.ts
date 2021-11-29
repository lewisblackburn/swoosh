import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookUpdateWithoutAuthorsInput } from "../inputs/BookUpdateWithoutAuthorsInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookUpdateWithWhereUniqueWithoutAuthorsInput {
  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: false
  })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookUpdateWithoutAuthorsInput, {
    nullable: false
  })
  data!: BookUpdateWithoutAuthorsInput;
}
