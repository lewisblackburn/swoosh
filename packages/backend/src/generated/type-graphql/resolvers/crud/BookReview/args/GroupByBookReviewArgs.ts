import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookReviewOrderByWithAggregationInput } from "../../../inputs/BookReviewOrderByWithAggregationInput";
import { BookReviewScalarWhereWithAggregatesInput } from "../../../inputs/BookReviewScalarWhereWithAggregatesInput";
import { BookReviewWhereInput } from "../../../inputs/BookReviewWhereInput";
import { BookReviewScalarFieldEnum } from "../../../../enums/BookReviewScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByBookReviewArgs {
  @TypeGraphQL.Field(_type => BookReviewWhereInput, {
    nullable: true
  })
  where?: BookReviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BookReviewOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: BookReviewOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookReviewScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"review" | "rating" | "userId" | "bookId">;

  @TypeGraphQL.Field(_type => BookReviewScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: BookReviewScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
