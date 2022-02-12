import * as TypeGraphQL from "type-graphql";

export enum AuthorInBookScalarFieldEnum {
  bookId = "bookId",
  personId = "personId",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(AuthorInBookScalarFieldEnum, {
  name: "AuthorInBookScalarFieldEnum",
  description: undefined,
});
