import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowOrderByWithRelationInput } from "../../../inputs/ShowOrderByWithRelationInput";
import { ShowWhereInput } from "../../../inputs/ShowWhereInput";
import { ShowWhereUniqueInput } from "../../../inputs/ShowWhereUniqueInput";
import { ShowScalarFieldEnum } from "../../../../enums/ShowScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class PlatformShowsArgs {
  @TypeGraphQL.Field(_type => ShowWhereInput, {
    nullable: true
  })
  where?: ShowWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ShowOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ShowOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ShowWhereUniqueInput, {
    nullable: true
  })
  cursor?: ShowWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ShowScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "title" | "description" | "thumbnail" | "locked" | "released" | "createdAt" | "updatedAt"> | undefined;
}
