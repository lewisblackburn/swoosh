import * as TypeGraphQL from "type-graphql";

export enum ActorInShowScalarFieldEnum {
  showId = "showId",
  personId = "personId",
  role = "role"
}
TypeGraphQL.registerEnumType(ActorInShowScalarFieldEnum, {
  name: "ActorInShowScalarFieldEnum",
  description: undefined,
});
