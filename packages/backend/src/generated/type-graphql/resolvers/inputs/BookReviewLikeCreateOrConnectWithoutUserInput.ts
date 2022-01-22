import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewLikeCreateWithoutUserInput } from "../inputs/BookReviewLikeCreateWithoutUserInput";
import { BookReviewLikeWhereUniqueInput } from "../inputs/BookReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewLikeCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class BookReviewLikeCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => BookReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: BookReviewLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookReviewLikeCreateWithoutUserInput, {
    nullable: false
  })
  create!: BookReviewLikeCreateWithoutUserInput;
}
