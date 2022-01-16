import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateWithoutReviewsInput } from "../inputs/BookCreateWithoutReviewsInput";
import { BookUpdateWithoutReviewsInput } from "../inputs/BookUpdateWithoutReviewsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookUpsertWithoutReviewsInput {
  @TypeGraphQL.Field(_type => BookUpdateWithoutReviewsInput, {
    nullable: false
  })
  update!: BookUpdateWithoutReviewsInput;

  @TypeGraphQL.Field(_type => BookCreateWithoutReviewsInput, {
    nullable: false
  })
  create!: BookCreateWithoutReviewsInput;
}
