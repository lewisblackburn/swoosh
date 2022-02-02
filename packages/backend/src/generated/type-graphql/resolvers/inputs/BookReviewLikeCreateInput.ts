import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewCreateNestedOneWithoutLikesInput } from "../inputs/BookReviewCreateNestedOneWithoutLikesInput";
import { UserCreateNestedOneWithoutBookReviewLikesInput } from "../inputs/UserCreateNestedOneWithoutBookReviewLikesInput";

@TypeGraphQL.InputType("BookReviewLikeCreateInput", {
  isAbstract: true
})
export class BookReviewLikeCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBookReviewLikesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutBookReviewLikesInput;

  @TypeGraphQL.Field(_type => BookReviewCreateNestedOneWithoutLikesInput, {
    nullable: false
  })
  bookReview!: BookReviewCreateNestedOneWithoutLikesInput;
}
