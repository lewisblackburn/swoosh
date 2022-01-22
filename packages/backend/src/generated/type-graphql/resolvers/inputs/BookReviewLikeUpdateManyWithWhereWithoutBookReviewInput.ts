import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewLikeScalarWhereInput } from "../inputs/BookReviewLikeScalarWhereInput";
import { BookReviewLikeUpdateManyMutationInput } from "../inputs/BookReviewLikeUpdateManyMutationInput";

@TypeGraphQL.InputType("BookReviewLikeUpdateManyWithWhereWithoutBookReviewInput", {
  isAbstract: true
})
export class BookReviewLikeUpdateManyWithWhereWithoutBookReviewInput {
  @TypeGraphQL.Field(_type => BookReviewLikeScalarWhereInput, {
    nullable: false
  })
  where!: BookReviewLikeScalarWhereInput;

  @TypeGraphQL.Field(_type => BookReviewLikeUpdateManyMutationInput, {
    nullable: false
  })
  data!: BookReviewLikeUpdateManyMutationInput;
}
