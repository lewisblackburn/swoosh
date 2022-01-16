import * as TypeGraphQL from "type-graphql";

export enum MovieScalarFieldEnum {
  id = "id",
  title = "title",
  overview = "overview",
  thumbnail = "thumbnail",
  locked = "locked",
  released = "released",
  status = "status",
  runtime = "runtime",
  revenue = "revenue",
  trailer = "trailer",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(MovieScalarFieldEnum, {
  name: "MovieScalarFieldEnum",
  description: undefined,
});
