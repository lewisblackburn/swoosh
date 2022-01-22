import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewLikeCreateWithoutBookReviewInput } from "../inputs/BookReviewLikeCreateWithoutBookReviewInput";
import { BookReviewLikeWhereUniqueInput } from "../inputs/BookReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewLikeCreateOrConnectWithoutBookReviewInput", {
  isAbstract: true
})
export class BookReviewLikeCreateOrConnectWithoutBookReviewInput {
  @TypeGraphQL.Field(_type => BookReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: BookReviewLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookReviewLikeCreateWithoutBookReviewInput, {
    nullable: false
  })
  create!: BookReviewLikeCreateWithoutBookReviewInput;
}
