import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowReviewOrderByWithAggregationInput } from "../../../inputs/ShowReviewOrderByWithAggregationInput";
import { ShowReviewScalarWhereWithAggregatesInput } from "../../../inputs/ShowReviewScalarWhereWithAggregatesInput";
import { ShowReviewWhereInput } from "../../../inputs/ShowReviewWhereInput";
import { ShowReviewScalarFieldEnum } from "../../../../enums/ShowReviewScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByShowReviewArgs {
  @TypeGraphQL.Field(_type => ShowReviewWhereInput, {
    nullable: true
  })
  where?: ShowReviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ShowReviewOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"review" | "rating" | "userId" | "showId">;

  @TypeGraphQL.Field(_type => ShowReviewScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ShowReviewScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
