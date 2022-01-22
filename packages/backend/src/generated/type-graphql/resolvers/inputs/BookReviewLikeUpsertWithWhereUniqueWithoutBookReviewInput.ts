import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewLikeCreateWithoutBookReviewInput } from "../inputs/BookReviewLikeCreateWithoutBookReviewInput";
import { BookReviewLikeUpdateWithoutBookReviewInput } from "../inputs/BookReviewLikeUpdateWithoutBookReviewInput";
import { BookReviewLikeWhereUniqueInput } from "../inputs/BookReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewLikeUpsertWithWhereUniqueWithoutBookReviewInput", {
  isAbstract: true
})
export class BookReviewLikeUpsertWithWhereUniqueWithoutBookReviewInput {
  @TypeGraphQL.Field(_type => BookReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: BookReviewLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookReviewLikeUpdateWithoutBookReviewInput, {
    nullable: false
  })
  update!: BookReviewLikeUpdateWithoutBookReviewInput;

  @TypeGraphQL.Field(_type => BookReviewLikeCreateWithoutBookReviewInput, {
    nullable: false
  })
  create!: BookReviewLikeCreateWithoutBookReviewInput;
}
