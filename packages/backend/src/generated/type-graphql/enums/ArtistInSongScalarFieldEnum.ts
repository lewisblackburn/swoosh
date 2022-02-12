import * as TypeGraphQL from "type-graphql";

export enum ArtistInSongScalarFieldEnum {
  songId = "songId",
  personId = "personId",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(ArtistInSongScalarFieldEnum, {
  name: "ArtistInSongScalarFieldEnum",
  description: undefined,
});
