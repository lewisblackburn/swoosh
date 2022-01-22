import * as TypeGraphQL from "type-graphql";

export enum MovieScalarFieldEnum {
  id = "id",
  title = "title",
  overview = "overview",
  poster = "poster",
  backdrop = "backdrop",
  locked = "locked",
  released = "released",
  runtime = "runtime",
  trailer = "trailer",
  rating = "rating",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(MovieScalarFieldEnum, {
  name: "MovieScalarFieldEnum",
  description: undefined,
});
