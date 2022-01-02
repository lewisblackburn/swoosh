import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlatformOnShowCreateInput } from "../../../inputs/PlatformOnShowCreateInput";

@TypeGraphQL.ArgsType()
export class CreatePlatformOnShowArgs {
  @TypeGraphQL.Field(_type => PlatformOnShowCreateInput, {
    nullable: false
  })
  data!: PlatformOnShowCreateInput;
}
