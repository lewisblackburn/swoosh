import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateNestedOneWithoutReviewsInput } from "../inputs/BookCreateNestedOneWithoutReviewsInput";
import { UserCreateNestedOneWithoutBookReviewsInput } from "../inputs/UserCreateNestedOneWithoutBookReviewsInput";

@TypeGraphQL.InputType("BookReviewCreateWithoutLikesInput", {
  isAbstract: true
})
export class BookReviewCreateWithoutLikesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  review?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rating!: number;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBookReviewsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutBookReviewsInput;

  @TypeGraphQL.Field(_type => BookCreateNestedOneWithoutReviewsInput, {
    nullable: false
  })
  book!: BookCreateNestedOneWithoutReviewsInput;
}
