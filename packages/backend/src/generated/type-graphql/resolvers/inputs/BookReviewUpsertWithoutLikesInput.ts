import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewCreateWithoutLikesInput } from "../inputs/BookReviewCreateWithoutLikesInput";
import { BookReviewUpdateWithoutLikesInput } from "../inputs/BookReviewUpdateWithoutLikesInput";

@TypeGraphQL.InputType("BookReviewUpsertWithoutLikesInput", {
  isAbstract: true
})
export class BookReviewUpsertWithoutLikesInput {
  @TypeGraphQL.Field(_type => BookReviewUpdateWithoutLikesInput, {
    nullable: false
  })
  update!: BookReviewUpdateWithoutLikesInput;

  @TypeGraphQL.Field(_type => BookReviewCreateWithoutLikesInput, {
    nullable: false
  })
  create!: BookReviewCreateWithoutLikesInput;
}
