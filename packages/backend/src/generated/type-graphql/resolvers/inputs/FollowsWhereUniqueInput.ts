import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowsFollowerIdFollowingIdCompoundUniqueInput } from "../inputs/FollowsFollowerIdFollowingIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowsWhereUniqueInput {
  @TypeGraphQL.Field(_type => FollowsFollowerIdFollowingIdCompoundUniqueInput, {
    nullable: true
  })
  followerId_followingId?: FollowsFollowerIdFollowingIdCompoundUniqueInput | undefined;
}
