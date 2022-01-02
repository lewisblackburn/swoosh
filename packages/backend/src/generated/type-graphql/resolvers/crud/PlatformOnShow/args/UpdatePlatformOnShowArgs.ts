import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlatformOnShowUpdateInput } from "../../../inputs/PlatformOnShowUpdateInput";
import { PlatformOnShowWhereUniqueInput } from "../../../inputs/PlatformOnShowWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdatePlatformOnShowArgs {
  @TypeGraphQL.Field(_type => PlatformOnShowUpdateInput, {
    nullable: false
  })
  data!: PlatformOnShowUpdateInput;

  @TypeGraphQL.Field(_type => PlatformOnShowWhereUniqueInput, {
    nullable: false
  })
  where!: PlatformOnShowWhereUniqueInput;
}
