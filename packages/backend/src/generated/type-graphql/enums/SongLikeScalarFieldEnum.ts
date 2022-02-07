import * as TypeGraphQL from "type-graphql";

export enum SongLikeScalarFieldEnum {
  userId = "userId",
  songId = "songId",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(SongLikeScalarFieldEnum, {
  name: "SongLikeScalarFieldEnum",
  description: undefined,
});
