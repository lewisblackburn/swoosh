import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookReviewCreateInput } from "../../../inputs/BookReviewCreateInput";

@TypeGraphQL.ArgsType()
export class CreateBookReviewArgs {
  @TypeGraphQL.Field(_type => BookReviewCreateInput, {
    nullable: false
  })
  data!: BookReviewCreateInput;
}
