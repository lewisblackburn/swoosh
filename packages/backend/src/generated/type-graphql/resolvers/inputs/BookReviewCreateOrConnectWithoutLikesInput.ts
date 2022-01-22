import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewCreateWithoutLikesInput } from "../inputs/BookReviewCreateWithoutLikesInput";
import { BookReviewWhereUniqueInput } from "../inputs/BookReviewWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewCreateOrConnectWithoutLikesInput", {
  isAbstract: true
})
export class BookReviewCreateOrConnectWithoutLikesInput {
  @TypeGraphQL.Field(_type => BookReviewWhereUniqueInput, {
    nullable: false
  })
  where!: BookReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookReviewCreateWithoutLikesInput, {
    nullable: false
  })
  create!: BookReviewCreateWithoutLikesInput;
}
