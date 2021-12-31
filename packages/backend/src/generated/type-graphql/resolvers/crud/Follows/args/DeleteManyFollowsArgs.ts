import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowsWhereInput } from "../../../inputs/FollowsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyFollowsArgs {
  @TypeGraphQL.Field(_type => FollowsWhereInput, {
    nullable: true
  })
  where?: FollowsWhereInput | undefined;
}
