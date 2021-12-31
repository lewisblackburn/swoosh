import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowsUpdateManyMutationInput } from "../../../inputs/FollowsUpdateManyMutationInput";
import { FollowsWhereInput } from "../../../inputs/FollowsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFollowsArgs {
  @TypeGraphQL.Field(_type => FollowsUpdateManyMutationInput, {
    nullable: false
  })
  data!: FollowsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => FollowsWhereInput, {
    nullable: true
  })
  where?: FollowsWhereInput | undefined;
}
