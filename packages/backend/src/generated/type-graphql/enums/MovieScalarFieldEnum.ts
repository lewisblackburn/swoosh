import * as TypeGraphQL from "type-graphql";

export enum MovieScalarFieldEnum {
  id = "id",
  title = "title",
  description = "description",
  locked = "locked",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(MovieScalarFieldEnum, {
  name: "MovieScalarFieldEnum",
  description: undefined,
});
