import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowOrderByWithAggregationInput } from "../../../inputs/ShowOrderByWithAggregationInput";
import { ShowScalarWhereWithAggregatesInput } from "../../../inputs/ShowScalarWhereWithAggregatesInput";
import { ShowWhereInput } from "../../../inputs/ShowWhereInput";
import { ShowScalarFieldEnum } from "../../../../enums/ShowScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByShowArgs {
  @TypeGraphQL.Field(_type => ShowWhereInput, {
    nullable: true
  })
  where?: ShowWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ShowOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ShowOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "title" | "description" | "poster" | "locked" | "released" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => ShowScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ShowScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
