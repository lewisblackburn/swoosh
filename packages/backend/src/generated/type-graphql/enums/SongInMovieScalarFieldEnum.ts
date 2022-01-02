import * as TypeGraphQL from "type-graphql";

export enum SongInMovieScalarFieldEnum {
  timestamp = "timestamp",
  description = "description",
  songId = "songId",
  movieId = "movieId"
}
TypeGraphQL.registerEnumType(SongInMovieScalarFieldEnum, {
  name: "SongInMovieScalarFieldEnum",
  description: undefined,
});
