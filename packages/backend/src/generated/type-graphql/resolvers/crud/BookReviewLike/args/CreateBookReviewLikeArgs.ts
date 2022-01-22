import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookReviewLikeCreateInput } from "../../../inputs/BookReviewLikeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateBookReviewLikeArgs {
  @TypeGraphQL.Field(_type => BookReviewLikeCreateInput, {
    nullable: false
  })
  data!: BookReviewLikeCreateInput;
}
