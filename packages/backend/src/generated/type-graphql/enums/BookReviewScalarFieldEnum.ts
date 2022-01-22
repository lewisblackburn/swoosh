import * as TypeGraphQL from "type-graphql";

export enum BookReviewScalarFieldEnum {
  review = "review",
  rating = "rating",
  userId = "userId",
  bookId = "bookId"
}
TypeGraphQL.registerEnumType(BookReviewScalarFieldEnum, {
  name: "BookReviewScalarFieldEnum",
  description: undefined,
});
