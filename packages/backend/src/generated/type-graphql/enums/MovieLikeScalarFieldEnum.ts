import * as TypeGraphQL from "type-graphql";

export enum MovieLikeScalarFieldEnum {
  userId = "userId",
  movieId = "movieId",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(MovieLikeScalarFieldEnum, {
  name: "MovieLikeScalarFieldEnum",
  description: undefined,
});
