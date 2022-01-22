import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewCreateWithoutBookInput } from "../inputs/BookReviewCreateWithoutBookInput";
import { BookReviewWhereUniqueInput } from "../inputs/BookReviewWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewCreateOrConnectWithoutBookInput", {
  isAbstract: true
})
export class BookReviewCreateOrConnectWithoutBookInput {
  @TypeGraphQL.Field(_type => BookReviewWhereUniqueInput, {
    nullable: false
  })
  where!: BookReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookReviewCreateWithoutBookInput, {
    nullable: false
  })
  create!: BookReviewCreateWithoutBookInput;
}
