import * as TypeGraphQL from "type-graphql";

export enum RatingScalarFieldEnum {
  id = "id",
  age = "age"
}
TypeGraphQL.registerEnumType(RatingScalarFieldEnum, {
  name: "RatingScalarFieldEnum",
  description: undefined,
});
