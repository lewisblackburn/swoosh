import * as TypeGraphQL from "type-graphql";

export enum ReviewScalarFieldEnum {
  id = "id",
  title = "title",
  review = "review",
  userId = "userId",
  movieId = "movieId",
  showId = "showId",
  bookId = "bookId",
  songId = "songId"
}
TypeGraphQL.registerEnumType(ReviewScalarFieldEnum, {
  name: "ReviewScalarFieldEnum",
  description: undefined,
});
