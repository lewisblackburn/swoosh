import * as TypeGraphQL from "type-graphql";

export enum PlatformScalarFieldEnum {
  id = "id",
  name = "name",
  apiKey = "apiKey"
}
TypeGraphQL.registerEnumType(PlatformScalarFieldEnum, {
  name: "PlatformScalarFieldEnum",
  description: undefined,
});
