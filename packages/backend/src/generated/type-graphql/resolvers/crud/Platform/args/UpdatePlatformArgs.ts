import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlatformUpdateInput } from "../../../inputs/PlatformUpdateInput";
import { PlatformWhereUniqueInput } from "../../../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdatePlatformArgs {
  @TypeGraphQL.Field(_type => PlatformUpdateInput, {
    nullable: false
  })
  data!: PlatformUpdateInput;

  @TypeGraphQL.Field(_type => PlatformWhereUniqueInput, {
    nullable: false
  })
  where!: PlatformWhereUniqueInput;
}
