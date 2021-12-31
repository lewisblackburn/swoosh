import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowsCreateInput } from "../../../inputs/FollowsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateFollowsArgs {
  @TypeGraphQL.Field(_type => FollowsCreateInput, {
    nullable: false
  })
  data!: FollowsCreateInput;
}
