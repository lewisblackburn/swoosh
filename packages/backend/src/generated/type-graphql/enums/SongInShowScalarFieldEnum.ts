import * as TypeGraphQL from "type-graphql";

export enum SongInShowScalarFieldEnum {
  timestamp = "timestamp",
  description = "description",
  songId = "songId",
  showId = "showId"
}
TypeGraphQL.registerEnumType(SongInShowScalarFieldEnum, {
  name: "SongInShowScalarFieldEnum",
  description: undefined,
});
