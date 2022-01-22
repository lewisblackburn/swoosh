import * as TypeGraphQL from "type-graphql";

export enum ShowReviewLikeScalarFieldEnum {
  userId = "userId",
  reviewUserId = "reviewUserId",
  reviewShowId = "reviewShowId",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(ShowReviewLikeScalarFieldEnum, {
  name: "ShowReviewLikeScalarFieldEnum",
  description: undefined,
});
