import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlatformOnShowOrderByWithRelationInput } from "../../../inputs/PlatformOnShowOrderByWithRelationInput";
import { PlatformOnShowWhereInput } from "../../../inputs/PlatformOnShowWhereInput";
import { PlatformOnShowWhereUniqueInput } from "../../../inputs/PlatformOnShowWhereUniqueInput";
import { PlatformOnShowScalarFieldEnum } from "../../../../enums/PlatformOnShowScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class PlatformPlatformOnShowArgs {
  @TypeGraphQL.Field(_type => PlatformOnShowWhereInput, {
    nullable: true
  })
  where?: PlatformOnShowWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnShowOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PlatformOnShowOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PlatformOnShowWhereUniqueInput, {
    nullable: true
  })
  cursor?: PlatformOnShowWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnShowScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"price" | "platformId" | "showId"> | undefined;
}
