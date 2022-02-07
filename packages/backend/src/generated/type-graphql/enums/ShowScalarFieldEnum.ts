import * as TypeGraphQL from "type-graphql";

export enum ShowScalarFieldEnum {
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
TypeGraphQL.registerEnumType(ShowScalarFieldEnum, {
  name: "ShowScalarFieldEnum",
  description: undefined,
});
