import * as TypeGraphQL from "type-graphql";

export enum SongReviewLikeScalarFieldEnum {
  userId = "userId",
  reviewUserId = "reviewUserId",
  reviewSongId = "reviewSongId",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(SongReviewLikeScalarFieldEnum, {
  name: "SongReviewLikeScalarFieldEnum",
  description: undefined,
});
