import * as TypeGraphQL from "type-graphql";

export enum BookScalarFieldEnum {
  id = "id",
  title = "title",
  description = "description",
  locked = "locked",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(BookScalarFieldEnum, {
  name: "BookScalarFieldEnum",
  description: undefined,
});
