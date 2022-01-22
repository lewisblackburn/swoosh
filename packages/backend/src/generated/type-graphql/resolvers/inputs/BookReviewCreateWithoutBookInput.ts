import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewLikeCreateNestedManyWithoutBookReviewInput } from "../inputs/BookReviewLikeCreateNestedManyWithoutBookReviewInput";
import { UserCreateNestedOneWithoutBookReviewsInput } from "../inputs/UserCreateNestedOneWithoutBookReviewsInput";

@TypeGraphQL.InputType("BookReviewCreateWithoutBookInput", {
  isAbstract: true
})
export class BookReviewCreateWithoutBookInput {
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
}
