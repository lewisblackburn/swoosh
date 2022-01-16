import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VoteOrderByWithAggregationInput } from "../../../inputs/VoteOrderByWithAggregationInput";
import { VoteScalarWhereWithAggregatesInput } from "../../../inputs/VoteScalarWhereWithAggregatesInput";
import { VoteWhereInput } from "../../../inputs/VoteWhereInput";
import { VoteScalarFieldEnum } from "../../../../enums/VoteScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByVoteArgs {
  @TypeGraphQL.Field(_type => VoteWhereInput, {
    nullable: true
  })
  where?: VoteWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VoteOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: VoteOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [VoteScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"userId" | "reviewId">;

  @TypeGraphQL.Field(_type => VoteScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: VoteScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
