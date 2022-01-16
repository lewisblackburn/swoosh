import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReviewOrderByWithAggregationInput } from "../../../inputs/ReviewOrderByWithAggregationInput";
import { ReviewScalarWhereWithAggregatesInput } from "../../../inputs/ReviewScalarWhereWithAggregatesInput";
import { ReviewWhereInput } from "../../../inputs/ReviewWhereInput";
import { ReviewScalarFieldEnum } from "../../../../enums/ReviewScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByReviewArgs {
  @TypeGraphQL.Field(_type => ReviewWhereInput, {
    nullable: true
  })
  where?: ReviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReviewOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ReviewOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "title" | "review" | "userId" | "movieId" | "showId" | "bookId" | "songId">;

  @TypeGraphQL.Field(_type => ReviewScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ReviewScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
