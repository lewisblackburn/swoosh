import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlatformOnShowCreateInput } from "../../../inputs/PlatformOnShowCreateInput";
import { PlatformOnShowUpdateInput } from "../../../inputs/PlatformOnShowUpdateInput";
import { PlatformOnShowWhereUniqueInput } from "../../../inputs/PlatformOnShowWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertPlatformOnShowArgs {
  @TypeGraphQL.Field(_type => PlatformOnShowWhereUniqueInput, {
    nullable: false
  })
  where!: PlatformOnShowWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlatformOnShowCreateInput, {
    nullable: false
  })
  create!: PlatformOnShowCreateInput;

  @TypeGraphQL.Field(_type => PlatformOnShowUpdateInput, {
    nullable: false
  })
  update!: PlatformOnShowUpdateInput;
}
