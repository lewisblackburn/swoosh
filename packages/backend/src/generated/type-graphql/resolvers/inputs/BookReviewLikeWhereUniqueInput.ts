import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewLikeUserIdReviewUserIdReviewBookIdCompoundUniqueInput } from "../inputs/BookReviewLikeUserIdReviewUserIdReviewBookIdCompoundUniqueInput";

@TypeGraphQL.InputType("BookReviewLikeWhereUniqueInput", {
  isAbstract: true
})
export class BookReviewLikeWhereUniqueInput {
  @TypeGraphQL.Field(_type => BookReviewLikeUserIdReviewUserIdReviewBookIdCompoundUniqueInput, {
    nullable: true
  })
  userId_reviewUserId_reviewBookId?: BookReviewLikeUserIdReviewUserIdReviewBookIdCompoundUniqueInput | undefined;
}
