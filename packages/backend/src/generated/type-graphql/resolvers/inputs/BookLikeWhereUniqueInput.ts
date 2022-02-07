import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookLikeUserIdBookIdCompoundUniqueInput } from "../inputs/BookLikeUserIdBookIdCompoundUniqueInput";

@TypeGraphQL.InputType("BookLikeWhereUniqueInput", {
  isAbstract: true
})
export class BookLikeWhereUniqueInput {
  @TypeGraphQL.Field(_type => BookLikeUserIdBookIdCompoundUniqueInput, {
    nullable: true
  })
  userId_bookId?: BookLikeUserIdBookIdCompoundUniqueInput | undefined;
}
