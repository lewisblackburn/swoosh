import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateNestedOneWithoutLikesInput } from "../inputs/BookCreateNestedOneWithoutLikesInput";

@TypeGraphQL.InputType("BookLikeCreateWithoutUserInput", {
  isAbstract: true
})
export class BookLikeCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => BookCreateNestedOneWithoutLikesInput, {
    nullable: false
  })
  book!: BookCreateNestedOneWithoutLikesInput;
}
