import * as TypeGraphQL from "type-graphql";

export enum VoteScalarFieldEnum {
  userId = "userId",
  reviewId = "reviewId"
}
TypeGraphQL.registerEnumType(VoteScalarFieldEnum, {
  name: "VoteScalarFieldEnum",
  description: undefined,
});
