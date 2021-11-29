import * as TypeGraphQL from "type-graphql";

export enum SongScalarFieldEnum {
  id = "id",
  title = "title",
  description = "description",
  locked = "locked",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(SongScalarFieldEnum, {
  name: "SongScalarFieldEnum",
  description: undefined,
});
