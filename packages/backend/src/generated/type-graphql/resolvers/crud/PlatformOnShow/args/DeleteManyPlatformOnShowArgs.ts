import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlatformOnShowWhereInput } from "../../../inputs/PlatformOnShowWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPlatformOnShowArgs {
  @TypeGraphQL.Field(_type => PlatformOnShowWhereInput, {
    nullable: true
  })
  where?: PlatformOnShowWhereInput | undefined;
}
