import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewUserIdBookIdCompoundUniqueInput } from "../inputs/BookReviewUserIdBookIdCompoundUniqueInput";

@TypeGraphQL.InputType("BookReviewWhereUniqueInput", {
  isAbstract: true
})
export class BookReviewWhereUniqueInput {
  @TypeGraphQL.Field(_type => BookReviewUserIdBookIdCompoundUniqueInput, {
    nullable: true
  })
  userId_bookId?: BookReviewUserIdBookIdCompoundUniqueInput | undefined;
}
