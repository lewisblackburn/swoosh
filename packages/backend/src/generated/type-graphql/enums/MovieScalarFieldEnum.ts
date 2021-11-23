import * as TypeGraphQL from "type-graphql";

export enum MovieScalarFieldEnum {
  id = "id",
  userId = "userId",
  title = "title",
  description = "description",
  personId = "personId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(MovieScalarFieldEnum, {
  name: "MovieScalarFieldEnum",
  description: undefined,
});
