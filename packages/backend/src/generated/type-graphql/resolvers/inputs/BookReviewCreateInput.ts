import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateNestedOneWithoutReviewsInput } from "../inputs/BookCreateNestedOneWithoutReviewsInput";
import { BookReviewLikeCreateNestedManyWithoutBookReviewInput } from "../inputs/BookReviewLikeCreateNestedManyWithoutBookReviewInput";
import { UserCreateNestedOneWithoutBookReviewsInput } from "../inputs/UserCreateNestedOneWithoutBookReviewsInput";

@TypeGraphQL.InputType("BookReviewCreateInput", {
  isAbstract: true
})
export class BookReviewCreateInput {
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

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBookReviewsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutBookReviewsInput;

  @TypeGraphQL.Field(_type => BookCreateNestedOneWithoutReviewsInput, {
    nullable: false
  })
  book!: BookCreateNestedOneWithoutReviewsInput;
}
