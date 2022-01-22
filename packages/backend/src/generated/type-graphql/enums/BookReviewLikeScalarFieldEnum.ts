import * as TypeGraphQL from "type-graphql";

export enum BookReviewLikeScalarFieldEnum {
  userId = "userId",
  reviewUserId = "reviewUserId",
  reviewBookId = "reviewBookId",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(BookReviewLikeScalarFieldEnum, {
  name: "BookReviewLikeScalarFieldEnum",
  description: undefined,
});
