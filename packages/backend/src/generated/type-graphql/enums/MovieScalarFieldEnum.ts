import * as TypeGraphQL from "type-graphql";

export enum MovieScalarFieldEnum {
  id = "id",
  title = "title",
  tagline = "tagline",
  overview = "overview",
  poster = "poster",
  backdrop = "backdrop",
  locked = "locked",
  released = "released",
  runtime = "runtime",
  trailer = "trailer",
  rating = "rating",
  updatedAt = "updatedAt",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(MovieScalarFieldEnum, {
  name: "MovieScalarFieldEnum",
  description: undefined,
});
