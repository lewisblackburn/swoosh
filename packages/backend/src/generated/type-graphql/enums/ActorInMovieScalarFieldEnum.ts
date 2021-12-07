import * as TypeGraphQL from "type-graphql";

export enum ActorInMovieScalarFieldEnum {
  movieId = "movieId",
  personId = "personId",
  role = "role"
}
TypeGraphQL.registerEnumType(ActorInMovieScalarFieldEnum, {
  name: "ActorInMovieScalarFieldEnum",
  description: undefined,
});
