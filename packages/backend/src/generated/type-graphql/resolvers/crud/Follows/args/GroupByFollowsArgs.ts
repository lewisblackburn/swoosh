import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowsOrderByWithAggregationInput } from "../../../inputs/FollowsOrderByWithAggregationInput";
import { FollowsScalarWhereWithAggregatesInput } from "../../../inputs/FollowsScalarWhereWithAggregatesInput";
import { FollowsWhereInput } from "../../../inputs/FollowsWhereInput";
import { FollowsScalarFieldEnum } from "../../../../enums/FollowsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFollowsArgs {
  @TypeGraphQL.Field(_type => FollowsWhereInput, {
    nullable: true
  })
  where?: FollowsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FollowsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: FollowsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"followingId" | "followerId" | "createdAt">;

  @TypeGraphQL.Field(_type => FollowsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: FollowsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
