import * as TypeGraphQL from "type-graphql";

export enum AuthorInBookScalarFieldEnum {
  bookId = "bookId",
  personId = "personId",
  stagename = "stagename"
}
TypeGraphQL.registerEnumType(AuthorInBookScalarFieldEnum, {
  name: "AuthorInBookScalarFieldEnum",
  description: undefined,
});
