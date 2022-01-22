import * as TypeGraphQL from "type-graphql";

export enum SongReviewScalarFieldEnum {
  review = "review",
  rating = "rating",
  userId = "userId",
  songId = "songId"
}
TypeGraphQL.registerEnumType(SongReviewScalarFieldEnum, {
  name: "SongReviewScalarFieldEnum",
  description: undefined,
});
