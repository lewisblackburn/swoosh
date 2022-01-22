import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewWhereInput } from "../inputs/BookReviewWhereInput";

@TypeGraphQL.InputType("BookReviewListRelationFilter", {
  isAbstract: true
})
export class BookReviewListRelationFilter {
  @TypeGraphQL.Field(_type => BookReviewWhereInput, {
    nullable: true
  })
  every?: BookReviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => BookReviewWhereInput, {
    nullable: true
  })
  some?: BookReviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => BookReviewWhereInput, {
    nullable: true
  })
  none?: BookReviewWhereInput | undefined;
}
