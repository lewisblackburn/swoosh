import * as TypeGraphQL from "type-graphql";

export enum BookScalarFieldEnum {
  id = "id",
  userId = "userId",
  title = "title",
  description = "description",
  personId = "personId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(BookScalarFieldEnum, {
  name: "BookScalarFieldEnum",
  description: undefined,
});
