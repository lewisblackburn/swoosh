import * as TypeGraphQL from "type-graphql";

export enum ShowLikeScalarFieldEnum {
  userId = "userId",
  showId = "showId",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(ShowLikeScalarFieldEnum, {
  name: "ShowLikeScalarFieldEnum",
  description: undefined,
});
