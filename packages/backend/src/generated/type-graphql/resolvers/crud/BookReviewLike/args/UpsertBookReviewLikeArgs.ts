import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookReviewLikeCreateInput } from "../../../inputs/BookReviewLikeCreateInput";
import { BookReviewLikeUpdateInput } from "../../../inputs/BookReviewLikeUpdateInput";
import { BookReviewLikeWhereUniqueInput } from "../../../inputs/BookReviewLikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertBookReviewLikeArgs {
  @TypeGraphQL.Field(_type => BookReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: BookReviewLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookReviewLikeCreateInput, {
    nullable: false
  })
  create!: BookReviewLikeCreateInput;

  @TypeGraphQL.Field(_type => BookReviewLikeUpdateInput, {
    nullable: false
  })
  update!: BookReviewLikeUpdateInput;
}
