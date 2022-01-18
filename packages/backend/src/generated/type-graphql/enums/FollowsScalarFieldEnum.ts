import * as TypeGraphQL from "type-graphql";

export enum FollowsScalarFieldEnum {
  followingId = "followingId",
  followerId = "followerId",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(FollowsScalarFieldEnum, {
  name: "FollowsScalarFieldEnum",
  description: undefined,
});
