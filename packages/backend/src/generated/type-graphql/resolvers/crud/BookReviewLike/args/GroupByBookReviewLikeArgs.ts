import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookReviewLikeOrderByWithAggregationInput } from "../../../inputs/BookReviewLikeOrderByWithAggregationInput";
import { BookReviewLikeScalarWhereWithAggregatesInput } from "../../../inputs/BookReviewLikeScalarWhereWithAggregatesInput";
import { BookReviewLikeWhereInput } from "../../../inputs/BookReviewLikeWhereInput";
import { BookReviewLikeScalarFieldEnum } from "../../../../enums/BookReviewLikeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByBookReviewLikeArgs {
  @TypeGraphQL.Field(_type => BookReviewLikeWhereInput, {
    nullable: true
  })
  where?: BookReviewLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BookReviewLikeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: BookReviewLikeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookReviewLikeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"userId" | "reviewUserId" | "reviewBookId" | "createdAt">;

  @TypeGraphQL.Field(_type => BookReviewLikeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: BookReviewLikeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
