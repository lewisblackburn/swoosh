import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookReviewLikeWhereUniqueInput } from "../../../inputs/BookReviewLikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteBookReviewLikeArgs {
  @TypeGraphQL.Field(_type => BookReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: BookReviewLikeWhereUniqueInput;
}
