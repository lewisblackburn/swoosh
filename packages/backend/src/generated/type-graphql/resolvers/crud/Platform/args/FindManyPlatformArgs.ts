import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlatformOrderByWithRelationInput } from "../../../inputs/PlatformOrderByWithRelationInput";
import { PlatformWhereInput } from "../../../inputs/PlatformWhereInput";
import { PlatformWhereUniqueInput } from "../../../inputs/PlatformWhereUniqueInput";
import { PlatformScalarFieldEnum } from "../../../../enums/PlatformScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyPlatformArgs {
  @TypeGraphQL.Field(_type => PlatformWhereInput, {
    nullable: true
  })
  where?: PlatformWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PlatformOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PlatformOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PlatformWhereUniqueInput, {
    nullable: true
  })
  cursor?: PlatformWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PlatformScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name"> | undefined;
}
