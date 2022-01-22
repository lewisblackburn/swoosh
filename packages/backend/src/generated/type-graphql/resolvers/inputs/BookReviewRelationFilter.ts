import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewWhereInput } from "../inputs/BookReviewWhereInput";

@TypeGraphQL.InputType("BookReviewRelationFilter", {
  isAbstract: true
})
export class BookReviewRelationFilter {
  @TypeGraphQL.Field(_type => BookReviewWhereInput, {
    nullable: true
  })
  is?: BookReviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => BookReviewWhereInput, {
    nullable: true
  })
  isNot?: BookReviewWhereInput | undefined;
}
