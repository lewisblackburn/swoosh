import * as TypeGraphQL from "type-graphql";

export enum SongScalarFieldEnum {
  id = "id",
  userId = "userId",
  title = "title",
  description = "description",
  personId = "personId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(SongScalarFieldEnum, {
  name: "SongScalarFieldEnum",
  description: undefined,
});
