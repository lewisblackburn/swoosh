import * as TypeGraphQL from "type-graphql";

export enum AuthorInBookScalarFieldEnum {
  bookId = "bookId",
  personId = "personId",
  penname = "penname"
}
TypeGraphQL.registerEnumType(AuthorInBookScalarFieldEnum, {
  name: "AuthorInBookScalarFieldEnum",
  description: undefined,
});
