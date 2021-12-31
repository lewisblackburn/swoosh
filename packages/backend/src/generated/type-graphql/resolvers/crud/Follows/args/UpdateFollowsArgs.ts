import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowsUpdateInput } from "../../../inputs/FollowsUpdateInput";
import { FollowsWhereUniqueInput } from "../../../inputs/FollowsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateFollowsArgs {
  @TypeGraphQL.Field(_type => FollowsUpdateInput, {
    nullable: false
  })
  data!: FollowsUpdateInput;

  @TypeGraphQL.Field(_type => FollowsWhereUniqueInput, {
    nullable: false
  })
  where!: FollowsWhereUniqueInput;
}
