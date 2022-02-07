import * as TypeGraphQL from "type-graphql";

export enum BookLikeScalarFieldEnum {
  userId = "userId",
  bookId = "bookId",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(BookLikeScalarFieldEnum, {
  name: "BookLikeScalarFieldEnum",
  description: undefined,
});
