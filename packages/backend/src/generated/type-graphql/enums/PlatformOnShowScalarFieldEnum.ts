import * as TypeGraphQL from "type-graphql";

export enum PlatformOnShowScalarFieldEnum {
  price = "price",
  platformId = "platformId",
  showId = "showId"
}
TypeGraphQL.registerEnumType(PlatformOnShowScalarFieldEnum, {
  name: "PlatformOnShowScalarFieldEnum",
  description: undefined,
});
