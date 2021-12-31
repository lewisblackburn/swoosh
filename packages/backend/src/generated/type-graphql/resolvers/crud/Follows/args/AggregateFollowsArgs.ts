import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowsOrderByWithRelationInput } from "../../../inputs/FollowsOrderByWithRelationInput";
import { FollowsWhereInput } from "../../../inputs/FollowsWhereInput";
import { FollowsWhereUniqueInput } from "../../../inputs/FollowsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateFollowsArgs {
  @TypeGraphQL.Field(_type => FollowsWhereInput, {
    nullable: true
  })
  where?: FollowsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FollowsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: FollowsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => FollowsWhereUniqueInput, {
    nullable: true
  })
  cursor?: FollowsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
