import * as TypeGraphQL from "type-graphql";

export enum MovieReviewLikeScalarFieldEnum {
  userId = "userId",
  reviewUserId = "reviewUserId",
  reviewMovieId = "reviewMovieId",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(MovieReviewLikeScalarFieldEnum, {
  name: "MovieReviewLikeScalarFieldEnum",
  description: undefined,
});
