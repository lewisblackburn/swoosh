import * as TypeGraphQL from "type-graphql";

export enum GenreScalarFieldEnum {
  id = "id",
  name = "name"
}
TypeGraphQL.registerEnumType(GenreScalarFieldEnum, {
  name: "GenreScalarFieldEnum",
  description: undefined,
});
