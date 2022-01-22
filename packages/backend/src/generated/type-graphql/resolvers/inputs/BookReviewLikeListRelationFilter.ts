import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewLikeWhereInput } from "../inputs/BookReviewLikeWhereInput";

@TypeGraphQL.InputType("BookReviewLikeListRelationFilter", {
  isAbstract: true
})
export class BookReviewLikeListRelationFilter {
  @TypeGraphQL.Field(_type => BookReviewLikeWhereInput, {
    nullable: true
  })
  every?: BookReviewLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => BookReviewLikeWhereInput, {
    nullable: true
  })
  some?: BookReviewLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => BookReviewLikeWhereInput, {
    nullable: true
  })
  none?: BookReviewLikeWhereInput | undefined;
}
