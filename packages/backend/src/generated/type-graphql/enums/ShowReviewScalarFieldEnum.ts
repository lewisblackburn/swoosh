import * as TypeGraphQL from "type-graphql";

export enum ShowReviewScalarFieldEnum {
  review = "review",
  rating = "rating",
  userId = "userId",
  showId = "showId"
}
TypeGraphQL.registerEnumType(ShowReviewScalarFieldEnum, {
  name: "ShowReviewScalarFieldEnum",
  description: undefined,
});
