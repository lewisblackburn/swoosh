import * as TypeGraphQL from "type-graphql";

export enum PlatformOnMovieScalarFieldEnum {
  price = "price",
  platformId = "platformId",
  movieId = "movieId"
}
TypeGraphQL.registerEnumType(PlatformOnMovieScalarFieldEnum, {
  name: "PlatformOnMovieScalarFieldEnum",
  description: undefined,
});
