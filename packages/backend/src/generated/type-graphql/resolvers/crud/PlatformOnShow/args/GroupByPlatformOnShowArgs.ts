import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlatformOnShowOrderByWithAggregationInput } from "../../../inputs/PlatformOnShowOrderByWithAggregationInput";
import { PlatformOnShowScalarWhereWithAggregatesInput } from "../../../inputs/PlatformOnShowScalarWhereWithAggregatesInput";
import { PlatformOnShowWhereInput } from "../../../inputs/PlatformOnShowWhereInput";
import { PlatformOnShowScalarFieldEnum } from "../../../../enums/PlatformOnShowScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPlatformOnShowArgs {
  @TypeGraphQL.Field(_type => PlatformOnShowWhereInput, {
    nullable: true
  })
  where?: PlatformOnShowWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnShowOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PlatformOnShowOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnShowScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"price" | "platformId" | "showId">;

  @TypeGraphQL.Field(_type => PlatformOnShowScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PlatformOnShowScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
