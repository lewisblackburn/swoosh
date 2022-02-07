import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowLikeOrderByWithAggregationInput } from "../../../inputs/ShowLikeOrderByWithAggregationInput";
import { ShowLikeScalarWhereWithAggregatesInput } from "../../../inputs/ShowLikeScalarWhereWithAggregatesInput";
import { ShowLikeWhereInput } from "../../../inputs/ShowLikeWhereInput";
import { ShowLikeScalarFieldEnum } from "../../../../enums/ShowLikeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByShowLikeArgs {
  @TypeGraphQL.Field(_type => ShowLikeWhereInput, {
    nullable: true
  })
  where?: ShowLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ShowLikeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ShowLikeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowLikeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"userId" | "showId" | "createdAt">;

  @TypeGraphQL.Field(_type => ShowLikeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ShowLikeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
