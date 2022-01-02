import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlatformOnShowWhereUniqueInput } from "../../../inputs/PlatformOnShowWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePlatformOnShowArgs {
  @TypeGraphQL.Field(_type => PlatformOnShowWhereUniqueInput, {
    nullable: false
  })
  where!: PlatformOnShowWhereUniqueInput;
}
