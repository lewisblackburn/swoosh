import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateWithoutReviewsInput } from "../inputs/BookCreateWithoutReviewsInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookCreateOrConnectWithoutReviewsInput", {
  isAbstract: true
})
export class BookCreateOrConnectWithoutReviewsInput {
  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: false
  })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookCreateWithoutReviewsInput, {
    nullable: false
  })
  create!: BookCreateWithoutReviewsInput;
}
