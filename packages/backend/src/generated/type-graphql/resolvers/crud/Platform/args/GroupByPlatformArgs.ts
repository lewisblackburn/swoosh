import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlatformOrderByWithAggregationInput } from "../../../inputs/PlatformOrderByWithAggregationInput";
import { PlatformScalarWhereWithAggregatesInput } from "../../../inputs/PlatformScalarWhereWithAggregatesInput";
import { PlatformWhereInput } from "../../../inputs/PlatformWhereInput";
import { PlatformScalarFieldEnum } from "../../../../enums/PlatformScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPlatformArgs {
  @TypeGraphQL.Field(_type => PlatformWhereInput, {
    nullable: true
  })
  where?: PlatformWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PlatformOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PlatformOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "apiKey">;

  @TypeGraphQL.Field(_type => PlatformScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PlatformScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
