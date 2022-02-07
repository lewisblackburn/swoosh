import * as TypeGraphQL from "type-graphql";

export enum ArtistInSongScalarFieldEnum {
  songId = "songId",
  personId = "personId",
  penname = "penname"
}
TypeGraphQL.registerEnumType(ArtistInSongScalarFieldEnum, {
  name: "ArtistInSongScalarFieldEnum",
  description: undefined,
});
