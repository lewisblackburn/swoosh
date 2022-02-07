import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateNestedOneWithoutLikesInput } from "../inputs/BookCreateNestedOneWithoutLikesInput";
import { UserCreateNestedOneWithoutLikedBooksInput } from "../inputs/UserCreateNestedOneWithoutLikedBooksInput";

@TypeGraphQL.InputType("BookLikeCreateInput", {
  isAbstract: true
})
export class BookLikeCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutLikedBooksInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutLikedBooksInput;

  @TypeGraphQL.Field(_type => BookCreateNestedOneWithoutLikesInput, {
    nullable: false
  })
  book!: BookCreateNestedOneWithoutLikesInput;
}
