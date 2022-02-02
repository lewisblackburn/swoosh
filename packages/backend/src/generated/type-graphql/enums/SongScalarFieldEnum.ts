import * as TypeGraphQL from "type-graphql";

export enum SongScalarFieldEnum {
  id = "id",
  title = "title",
  description = "description",
  poster = "poster",
  locked = "locked",
  released = "released",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(SongScalarFieldEnum, {
  name: "SongScalarFieldEnum",
  description: undefined,
});
