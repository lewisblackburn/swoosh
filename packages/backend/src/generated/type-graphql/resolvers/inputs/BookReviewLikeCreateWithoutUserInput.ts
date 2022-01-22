import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewCreateNestedOneWithoutLikesInput } from "../inputs/BookReviewCreateNestedOneWithoutLikesInput";

@TypeGraphQL.InputType("BookReviewLikeCreateWithoutUserInput", {
  isAbstract: true
})
export class BookReviewLikeCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => BookReviewCreateNestedOneWithoutLikesInput, {
    nullable: false
  })
  bookReview!: BookReviewCreateNestedOneWithoutLikesInput;
}
