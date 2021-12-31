import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowsCreateInput } from "../../../inputs/FollowsCreateInput";
import { FollowsUpdateInput } from "../../../inputs/FollowsUpdateInput";
import { FollowsWhereUniqueInput } from "../../../inputs/FollowsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertFollowsArgs {
  @TypeGraphQL.Field(_type => FollowsWhereUniqueInput, {
    nullable: false
  })
  where!: FollowsWhereUniqueInput;

  @TypeGraphQL.Field(_type => FollowsCreateInput, {
    nullable: false
  })
  create!: FollowsCreateInput;

  @TypeGraphQL.Field(_type => FollowsUpdateInput, {
    nullable: false
  })
  update!: FollowsUpdateInput;
}
