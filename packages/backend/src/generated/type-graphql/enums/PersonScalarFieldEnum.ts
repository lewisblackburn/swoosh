import * as TypeGraphQL from "type-graphql";

export enum PersonScalarFieldEnum {
  id = "id",
  type = "type"
}
TypeGraphQL.registerEnumType(PersonScalarFieldEnum, {
  name: "PersonScalarFieldEnum",
  description: undefined,
});
