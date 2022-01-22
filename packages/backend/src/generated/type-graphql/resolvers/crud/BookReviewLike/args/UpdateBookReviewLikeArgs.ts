import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookReviewLikeUpdateInput } from "../../../inputs/BookReviewLikeUpdateInput";
import { BookReviewLikeWhereUniqueInput } from "../../../inputs/BookReviewLikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateBookReviewLikeArgs {
  @TypeGraphQL.Field(_type => BookReviewLikeUpdateInput, {
    nullable: false
  })
  data!: BookReviewLikeUpdateInput;

  @TypeGraphQL.Field(_type => BookReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: BookReviewLikeWhereUniqueInput;
}
