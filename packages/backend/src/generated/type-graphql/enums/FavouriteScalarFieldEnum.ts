import * as TypeGraphQL from "type-graphql";

export enum FavouriteScalarFieldEnum {
  id = "id",
  userId = "userId"
}
TypeGraphQL.registerEnumType(FavouriteScalarFieldEnum, {
  name: "FavouriteScalarFieldEnum",
  description: undefined,
});
