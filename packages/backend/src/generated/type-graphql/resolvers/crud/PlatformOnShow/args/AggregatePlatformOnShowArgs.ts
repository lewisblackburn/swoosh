import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlatformOnShowOrderByWithRelationInput } from "../../../inputs/PlatformOnShowOrderByWithRelationInput";
import { PlatformOnShowWhereInput } from "../../../inputs/PlatformOnShowWhereInput";
import { PlatformOnShowWhereUniqueInput } from "../../../inputs/PlatformOnShowWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePlatformOnShowArgs {
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
}
