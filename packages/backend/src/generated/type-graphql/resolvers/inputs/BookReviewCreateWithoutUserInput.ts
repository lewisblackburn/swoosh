import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateNestedOneWithoutReviewsInput } from "../inputs/BookCreateNestedOneWithoutReviewsInput";
import { BookReviewLikeCreateNestedManyWithoutBookReviewInput } from "../inputs/BookReviewLikeCreateNestedManyWithoutBookReviewInput";

@TypeGraphQL.InputType("BookReviewCreateWithoutUserInput", {
  isAbstract: true
})
export class BookReviewCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  review?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rating!: number;

  @TypeGraphQL.Field(_type => BookReviewLikeCreateNestedManyWithoutBookReviewInput, {
    nullable: true
  })
  likes?: BookReviewLikeCreateNestedManyWithoutBookReviewInput | undefined;

  @TypeGraphQL.Field(_type => BookCreateNestedOneWithoutReviewsInput, {
    nullable: false
  })
  book!: BookCreateNestedOneWithoutReviewsInput;
}
