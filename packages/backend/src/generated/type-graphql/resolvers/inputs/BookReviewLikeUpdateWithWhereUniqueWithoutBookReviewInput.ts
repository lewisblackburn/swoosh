import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewLikeUpdateWithoutBookReviewInput } from "../inputs/BookReviewLikeUpdateWithoutBookReviewInput";
import { BookReviewLikeWhereUniqueInput } from "../inputs/BookReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewLikeUpdateWithWhereUniqueWithoutBookReviewInput", {
  isAbstract: true
})
export class BookReviewLikeUpdateWithWhereUniqueWithoutBookReviewInput {
  @TypeGraphQL.Field(_type => BookReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: BookReviewLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookReviewLikeUpdateWithoutBookReviewInput, {
    nullable: false
  })
  data!: BookReviewLikeUpdateWithoutBookReviewInput;
}
