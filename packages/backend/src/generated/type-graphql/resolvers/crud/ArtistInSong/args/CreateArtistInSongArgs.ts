import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistInSongCreateInput } from "../../../inputs/ArtistInSongCreateInput";

@TypeGraphQL.ArgsType()
export class CreateArtistInSongArgs {
  @TypeGraphQL.Field(_type => ArtistInSongCreateInput, {
    nullable: false
  })
  data!: ArtistInSongCreateInput;
}
