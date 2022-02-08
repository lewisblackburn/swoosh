import * as TypeGraphQL from "type-graphql";

export enum ArtistInSongScalarFieldEnum {
  songId = "songId",
  personId = "personId",
  stagename = "stagename"
}
TypeGraphQL.registerEnumType(ArtistInSongScalarFieldEnum, {
  name: "ArtistInSongScalarFieldEnum",
  description: undefined,
});
