import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlatformCreateInput } from "../../../inputs/PlatformCreateInput";

@TypeGraphQL.ArgsType()
export class CreatePlatformArgs {
  @TypeGraphQL.Field(_type => PlatformCreateInput, {
    nullable: false
  })
  data!: PlatformCreateInput;
}
