import * as TypeGraphQL from "type-graphql";

export enum ShowScalarFieldEnum {
  id = "id",
  title = "title",
  description = "description",
  thumbnail = "thumbnail",
  locked = "locked",
  released = "released",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(ShowScalarFieldEnum, {
  name: "ShowScalarFieldEnum",
  description: undefined,
});