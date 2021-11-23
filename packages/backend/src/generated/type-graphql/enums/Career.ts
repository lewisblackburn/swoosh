import * as TypeGraphQL from "type-graphql";

export enum Career {
  AUTHOR = "AUTHOR",
  ARTIST = "ARTIST",
  ACTOR = "ACTOR"
}
TypeGraphQL.registerEnumType(Career, {
  name: "Career",
  description: undefined,
});
