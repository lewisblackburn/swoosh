import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewScalarWhereInput } from "../inputs/BookReviewScalarWhereInput";
import { BookReviewUpdateManyMutationInput } from "../inputs/BookReviewUpdateManyMutationInput";

@TypeGraphQL.InputType("BookReviewUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class BookReviewUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => BookReviewScalarWhereInput, {
    nullable: false
  })
  where!: BookReviewScalarWhereInput;

  @TypeGraphQL.Field(_type => BookReviewUpdateManyMutationInput, {
    nullable: false
  })
  data!: BookReviewUpdateManyMutationInput;
}
