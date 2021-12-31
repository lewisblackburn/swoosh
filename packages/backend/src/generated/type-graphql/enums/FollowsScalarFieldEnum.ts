import * as TypeGraphQL from "type-graphql";

export enum FollowsScalarFieldEnum {
  followingId = "followingId",
  followerId = "followerId"
}
TypeGraphQL.registerEnumType(FollowsScalarFieldEnum, {
  name: "FollowsScalarFieldEnum",
  description: undefined,
});
